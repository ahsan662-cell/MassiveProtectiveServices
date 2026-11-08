import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';

interface LinkedInIconProps {
  className?: string;
}

export const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className = 'w-4 h-4' }) => {
  return <FaLinkedin className={className} />;
};

export { FaLinkedin };
export default LinkedInIcon;
