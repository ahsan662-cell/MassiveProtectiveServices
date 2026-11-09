'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  Mail,
  MessageCircle,
  RefreshCw,
  Search,
  Download,
  Trash2,
  ExternalLink,
  Eye,
  X,
  Phone,
  Calendar,
  MapPin,
  Briefcase,
  FileText,
  Clock,
  ChevronDown,
  Filter,
  Check,
  Building,
} from 'lucide-react';
import { FormSubmissionRecord, SubmissionStats } from '@/utils/submissionStore';

export const OpsDashboardClient: React.FC = () => {
  const [submissions, setSubmissions] = useState<FormSubmissionRecord[]>([]);
  const [stats, setStats] = useState<SubmissionStats>({
    total: 0,
    successful: 0,
    failed: 0,
    email: 0,
    whatsapp: 0,
    todayCount: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastRefreshed, setLastRefreshed] = useState<string>('Just now');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'success' | 'failed' | 'email' | 'whatsapp'>('all');
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmissionRecord | null>(null);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(true);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const fetchLiveSubmissions = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/submissions', {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' },
      });
      if (res.ok) {
        const data = await res.json();
        setSubmissions(data.submissions || []);
        if (data.stats) {
          setStats(data.stats);
        }
        setLastRefreshed(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true }));
      }
    } catch (err) {
      console.error('[Ops Dashboard] Failed loading analytics:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLiveSubmissions();
  }, [fetchLiveSubmissions]);

  // Live Auto-Refresh every 15 seconds
  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(() => {
      fetchLiveSubmissions();
    }, 15000);
    return () => clearInterval(interval);
  }, [autoRefresh, fetchLiveSubmissions]);

  // Filtered submissions list
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((item) => {
      // Status & Channel Filter
      if (statusFilter === 'success' && item.status !== 'success') return false;
      if (statusFilter === 'failed' && item.status !== 'failed') return false;
      if (statusFilter === 'email' && item.channel !== 'email') return false;
      if (statusFilter === 'whatsapp' && item.channel !== 'whatsapp') return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.fullName?.toLowerCase().includes(q);
        const matchesEmail = item.email?.toLowerCase().includes(q);
        const matchesPhone = item.phone?.toLowerCase().includes(q);
        const matchesSource = item.formSource?.toLowerCase().includes(q);
        const matchesService = item.serviceType?.toLowerCase().includes(q);
        const matchesLocation = item.location?.toLowerCase().includes(q);
        const matchesId = item.id?.toLowerCase().includes(q);
        return (
          matchesName ||
          matchesEmail ||
          matchesPhone ||
          matchesSource ||
          matchesService ||
          matchesLocation ||
          matchesId
        );
      }

      return true;
    });
  }, [submissions, statusFilter, searchQuery]);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/submissions?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setSubmissions((prev) => prev.filter((item) => item.id !== id));
        setDeleteConfirmId(null);
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(null);
        }
      }
    } catch (err) {
      console.error('[Ops Dashboard] Delete failed:', err);
    }
  };

  const handleExportCSV = () => {
    if (submissions.length === 0) return;

    const headers = [
      'Submission ID',
      'Date & Time (EST)',
      'Channel',
      'Status',
      'Client Name',
      'Phone Number',
      'Email Address',
      'Form Source',
      'Service Requested',
      'Location / Jurisdiction',
      'Preferred Date',
      'Organization / Company',
      'Job Title',
      'Resume Attached',
      'Message / Scope',
      'Error Details',
    ];

    const rows = submissions.map((s) => [
      s.id,
      new Date(s.createdAt).toLocaleString('en-US', { timeZone: 'America/New_York' }),
      s.channel.toUpperCase(),
      s.status.toUpperCase(),
      `"${(s.fullName || '').replace(/"/g, '""')}"`,
      `"${(s.phone || '').replace(/"/g, '""')}"`,
      `"${(s.email || '').replace(/"/g, '""')}"`,
      `"${(s.formSource || '').replace(/"/g, '""')}"`,
      `"${(s.serviceType || '').replace(/"/g, '""')}"`,
      `"${(s.location || '').replace(/"/g, '""')}"`,
      `"${(s.preferredDate || '').replace(/"/g, '""')}"`,
      `"${(s.companyName || '').replace(/"/g, '""')}"`,
      `"${(s.jobTitle || '').replace(/"/g, '""')}"`,
      `"${(s.resumeFileName || '').replace(/"/g, '""')}"`,
      `"${(s.message || '').replace(/"/g, '""')}"`,
      `"${(s.errorMessage || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `MPS_Form_Submissions_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const successRate = stats.total > 0 ? Math.round((stats.successful / stats.total) * 100) : 100;

  return (
    <div className="min-h-screen bg-[#070D18] text-[#F1F5F9] font-sans antialiased pb-20">
      {/* Top Operations Command Header */}
      <header className="sticky top-0 z-30 bg-[#0B1424]/95 backdrop-blur-md border-b border-white/[0.08] px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#0E2445] border border-[#3B82F6]/50 flex items-center justify-center text-[#93C5FD] shadow-md shrink-0">
              <Shield className="w-5 h-5 text-[#3B82F6]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  Operations Dispatch Command
                </h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                  Live Intake
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                FL License B1400200 · Delray Beach Headquarters Dispatch
              </p>
            </div>
          </div>

          {/* Quick Actions Bar */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={fetchLiveSubmissions}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#101F38] hover:bg-[#162B4D] border border-white/10 text-xs text-zinc-200 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
              title="Refresh live submissions"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#93C5FD] ${isLoading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              type="button"
              onClick={handleExportCSV}
              disabled={submissions.length === 0}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0E2445] hover:bg-[#173A6E] border border-[#3B82F6]/40 text-xs font-medium text-white transition-all cursor-pointer shadow-sm disabled:opacity-40"
              title="Download Excel / CSV spreadsheet"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <div className="hidden md:flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 pl-2 border-l border-white/10">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>{lastRefreshed}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Dashboard Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-6 sm:space-y-8">
        {/* KPI Analytics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* Card 1: Total Inquiries */}
          <div className="col-span-2 sm:col-span-1 p-4 sm:p-5 rounded-md bg-[#0B1424] border border-white/10 shadow-lg">
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider">Total Inquiries</span>
              <FileText className="w-4 h-4 text-[#93C5FD]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {stats.total}
              </span>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                {successRate}% Success
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 mt-1">Across all website forms</p>
          </div>

          {/* Card 2: Successful Deliveries */}
          <div className="p-4 sm:p-5 rounded-md bg-[#0B1424] border border-emerald-500/30 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500/70" />
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Successful
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {stats.successful}
            </div>
            <p className="text-[11px] text-zinc-400 mt-1">Confirmed Dispatches</p>
          </div>

          {/* Card 3: Failed Attempts */}
          <div className="p-4 sm:p-5 rounded-md bg-[#0B1424] border border-red-500/30 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-500/70" />
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-red-400">Failed</span>
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {stats.failed}
            </div>
            <p className="text-[11px] text-zinc-400 mt-1">
              {stats.failed > 0 ? 'Review error details below' : 'Zero dispatch errors'}
            </p>
          </div>

          {/* Card 4: WhatsApp Leads */}
          <div className="p-4 sm:p-5 rounded-md bg-[#0B1424] border border-[#25D366]/30 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#25D366]/70" />
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#25D366]">
                WhatsApp
              </span>
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {stats.whatsapp}
            </div>
            <p className="text-[11px] text-zinc-400 mt-1">Instant Chat Inquiries</p>
          </div>

          {/* Card 5: Today's Intake */}
          <div className="p-4 sm:p-5 rounded-md bg-[#0B1424] border border-blue-500/30 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500/70" />
            <div className="flex items-center justify-between text-zinc-400 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">Today</span>
              <Calendar className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {stats.todayCount}
            </div>
            <p className="text-[11px] text-zinc-400 mt-1">Incoming past 24 hours</p>
          </div>
        </div>

        {/* Search & Channel Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by client name, email, phone, location, or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0B1424] border border-white/10 rounded-md pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: `All (${submissions.length})` },
              { id: 'success', label: `Successful (${stats.successful})` },
              { id: 'failed', label: `Failed (${stats.failed})` },
              { id: 'email', label: `Email (${stats.email})` },
              { id: 'whatsapp', label: `WhatsApp (${stats.whatsapp})` },
            ].map((tab) => {
              const active = statusFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setStatusFilter(tab.id as any)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer shrink-0 ${
                    active
                      ? 'bg-[#0E2445] text-white border border-[#3B82F6]'
                      : 'bg-[#0B1424] text-zinc-400 hover:text-white border border-white/5 hover:border-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Submissions Table */}
        <div className="rounded-md bg-[#0B1424] border border-white/10 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#09101E] border-b border-white/[0.08] text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4">Status / Channel</th>
                  <th className="py-3 px-4">Client / Submitter</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Service & Territory</th>
                  <th className="py-3 px-4">Form Origin</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {filteredSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-zinc-400">
                      <div className="max-w-sm mx-auto space-y-2">
                        <Shield className="w-8 h-8 text-zinc-600 mx-auto" />
                        <p className="text-sm font-medium text-white">No form submissions found</p>
                        <p className="text-xs text-zinc-400">
                          {submissions.length === 0
                            ? 'As visitors fill out consultation forms on the website, all submissions will automatically stream in here.'
                            : 'No records match your active search filters.'}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredSubmissions.map((record) => {
                    const formattedDate = new Date(record.createdAt).toLocaleString('en-US', {
                      timeZone: 'America/New_York',
                      month: 'short',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true,
                    });

                    return (
                      <tr
                        key={record.id}
                        className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
                        onClick={() => setSelectedSubmission(record)}
                      >
                        {/* Timestamp & ID */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="font-mono text-zinc-200 text-xs">{formattedDate} EST</div>
                          <div className="text-[10px] font-mono text-zinc-400">{record.id}</div>
                        </td>

                        {/* Status & Channel */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            {record.status === 'success' ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                                <span>Success</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-red-500/15 text-red-400 border border-red-500/30">
                                <AlertTriangle className="w-2.5 h-2.5" />
                                <span>Failed</span>
                              </span>
                            )}

                            {record.channel === 'whatsapp' ? (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30">
                                <MessageCircle className="w-2.5 h-2.5" />
                                <span>WhatsApp</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-[#0E2445] text-[#93C5FD] border border-[#3B82F6]/30">
                                <Mail className="w-2.5 h-2.5" />
                                <span>Email</span>
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Client Name */}
                        <td className="py-3 px-4">
                          <div className="font-semibold text-white group-hover:text-[#93C5FD] transition-colors">
                            {record.fullName || 'Anonymous / Unspecified'}
                          </div>
                          {(record.companyName || record.jobTitle) && (
                            <div className="text-[11px] text-zinc-400 truncate max-w-xs">
                              {[record.jobTitle, record.companyName].filter(Boolean).join(' · ')}
                            </div>
                          )}
                        </td>

                        {/* Contact Info */}
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="text-zinc-200 font-mono text-[11px]">{record.phone || 'No phone'}</div>
                          <div className="text-zinc-400 text-[11px] truncate max-w-[180px]">
                            {record.email || 'No email'}
                          </div>
                        </td>

                        {/* Service & Territory */}
                        <td className="py-3 px-4">
                          <div className="font-medium text-white truncate max-w-xs">
                            {record.serviceType || 'General Protection'}
                          </div>
                          <div className="text-[11px] text-zinc-400 truncate max-w-xs">
                            {record.location || 'Florida Territory'}
                          </div>
                        </td>

                        {/* Form Origin */}
                        <td className="py-3 px-4">
                          <span className="text-[11px] text-zinc-400 truncate max-w-[200px] block">
                            {record.formSource}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <div
                            className="inline-flex items-center gap-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              type="button"
                              onClick={() => setSelectedSubmission(record)}
                              className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                              title="View full form submission details"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>

                            {deleteConfirmId === record.id ? (
                              <button
                                type="button"
                                onClick={() => handleDelete(record.id)}
                                className="px-2 py-1 rounded bg-red-600 hover:bg-red-700 text-white font-mono text-[10px] uppercase font-bold"
                              >
                                Confirm
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={() => setDeleteConfirmId(record.id)}
                                className="p-1.5 rounded bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition-colors"
                                title="Delete entry"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Slide-out Full Submission Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl bg-[#0B1424] border border-[#0E2445]/80 rounded-lg shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#93C5FD]">{selectedSubmission.id}</span>
                  {selectedSubmission.status === 'success' ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Success
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-red-500/20 text-red-400 border border-red-500/30">
                      Failed Delivery
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-white/10 text-zinc-300">
                    {selectedSubmission.channel.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedSubmission.fullName}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  Origin: {selectedSubmission.formSource} ·{' '}
                  {new Date(selectedSubmission.createdAt).toLocaleString('en-US', {
                    timeZone: 'America/New_York',
                  })}{' '}
                  EST
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSubmission(null)}
                className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Error banner if failed */}
            {selectedSubmission.status === 'failed' && (
              <div className="p-3.5 rounded bg-red-950/40 border border-red-700/60 text-xs text-red-200 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Failure Telemetry:</p>
                  <p className="mt-0.5 font-mono">{selectedSubmission.errorMessage || 'Transmission was dropped or unconfirmed.'}</p>
                </div>
              </div>
            )}

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#080E1A] p-4 rounded border border-white/5">
              <div>
                <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Direct Phone
                </span>
                <a
                  href={`tel:${selectedSubmission.phone}`}
                  className="text-sm font-semibold text-[#93C5FD] hover:underline flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>{selectedSubmission.phone || 'Not provided'}</span>
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Email Address
                </span>
                <a
                  href={`mailto:${selectedSubmission.email}`}
                  className="text-sm font-semibold text-[#93C5FD] hover:underline flex items-center gap-1.5 mt-0.5 truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span className="truncate">{selectedSubmission.email || 'Not provided'}</span>
                </a>
              </div>

              {selectedSubmission.companyName && (
                <div>
                  <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Company / Organization
                  </span>
                  <div className="text-sm font-medium text-white flex items-center gap-1.5 mt-0.5">
                    <Building className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{selectedSubmission.companyName}</span>
                  </div>
                </div>
              )}

              {selectedSubmission.location && (
                <div>
                  <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Location / Territory
                  </span>
                  <div className="text-sm font-medium text-white flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{selectedSubmission.location}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Operational Requirements */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                Operational Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded bg-[#080E1A] border border-white/5">
                  <span className="text-zinc-400 block text-[11px]">Service Requested</span>
                  <span className="font-semibold text-white mt-0.5 block">
                    {selectedSubmission.serviceType || 'Executive Protection'}
                  </span>
                </div>

                {selectedSubmission.preferredDate && (
                  <div className="p-3 rounded bg-[#080E1A] border border-white/5">
                    <span className="text-zinc-400 block text-[11px]">Deployment Timeline</span>
                    <span className="font-semibold text-white mt-0.5 block">
                      {selectedSubmission.preferredDate}
                    </span>
                  </div>
                )}

                {selectedSubmission.resumeFileName && (
                  <div className="p-3 rounded bg-[#080E1A] border border-[#3B82F6]/30 sm:col-span-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#93C5FD]" />
                      <div>
                        <span className="text-zinc-400 block text-[10px]">Attached Resume</span>
                        <span className="font-medium text-white">{selectedSubmission.resumeFileName}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                      Dispatched with Email
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Full Message / Scope Notes */}
            {selectedSubmission.message && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                  Client Message / Operational Scope
                </h4>
                <div className="p-4 rounded bg-[#080E1A] border border-white/5 text-xs sm:text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">
                  {selectedSubmission.message}
                </div>
              </div>
            )}

            {/* Technical Metadata */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
              <div>IP: {selectedSubmission.ip || '127.0.0.1'}</div>
              <div>ID: {selectedSubmission.id}</div>
              <a
                href={`https://wa.me/${selectedSubmission.phone?.replace(/\D/g, '') || ''}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 border border-[#25D366]/40 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Message Client on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpsDashboardClient;

