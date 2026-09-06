import React from 'react';

export const FooterTechStack = ({ techStack, deploymentPlatform, isDarkMode }) => {
  return (
    <div className={`text-center md:text-right font-mono text-[10px] max-w-60 md:max-w-xs tracking-wide ${
      isDarkMode ? 'text-gray-500' : 'text-slate-500'
    }`}>
      Built using{' '}
      {techStack.map((tech, index) => (
        <React.Fragment key={tech.name}>
          <span className={isDarkMode ? 'text-gray-300' : 'text-slate-800'}>
            {tech.name}
          </span>
          {index < techStack.length - 1 ? ', ' : ''}
          {index === techStack.length - 2 ? '& ' : ''}
        </React.Fragment>
      ))}. Deployed seamlessly via <span className={isDarkMode ? 'text-gray-300' : 'text-slate-800'}>{deploymentPlatform}</span>.
    </div>
  );
};