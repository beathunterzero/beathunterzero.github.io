import React, { useState } from "react";

const CategoryIcons: Record<string, React.ReactNode> = {
  "Threat Hunting": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2C16.9706 2 21 6.02944 21 11C21 15.9706 16.9706 20 12 20C7.02944 20 3 15.9706 3 11C3 6.02944 7.02944 2 12 2ZM12 4C8.13401 4 5 7.13401 5 11C5 14.866 8.13401 18 12 18C15.866 18 19 14.866 19 11C19 7.13401 15.866 4 12 4ZM12 6C14.7614 6 17 8.23858 17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11C7 8.23858 9.23858 6 12 6ZM12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8ZM12 10C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10ZM13 21V23H11V21H13Z"></path>
    </svg>
  ),

  "Detection Engineering": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2L20.5 5.5V11.5C20.5 16.7467 16.8538 21.6499 12 23C7.14621 21.6499 3.5 16.7467 3.5 11.5V5.5L12 2ZM12 4.18L5.5 6.85V11.5C5.5 15.7672 8.31564 19.7936 12 20.917C15.6844 19.7936 18.5 15.7672 18.5 11.5V6.85L12 4.18ZM16.7071 8.29289L18.1213 9.70711L11 16.8284L6.87868 12.7071L8.29289 11.2929L11 14L16.7071 8.29289Z"></path>
    </svg>
  ),

  "DFIR & Incident Response": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929L20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM9 6H11V11H9V6ZM9 12H11V14H9V12Z"></path>
    </svg>
  ),

  "Cloud Security": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C4.34 18 3 16.66 3 15C3 13.46 4.16 12.14 5.7 12.02L6.81 11.93L7.33 10.95C8.23 9.19 10.01 8 12 8C14.71 8 16.95 10.02 17.29 12.69L17.5 14.29L19.12 14.4C20.17 14.47 21 15.35 21 16.42C21 17.29 20.1 18 19 18Z"></path>
    </svg>
  ),

  "Security Labs & Engineering": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 4H21C21.5523 4 22 4.44772 22 5V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V5C2 4.44772 2.44772 4 3 4ZM4 6V18H20V6H4ZM8.41421 12L6.34315 9.92893L7.75736 8.51472L11.2426 12L7.75736 15.4853L6.34315 14.0711L8.41421 12ZM12 14H18V16H12V14Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills: Record<string, string[]> = {
    "Threat Hunting": [
      "Hypothesis-based investigations.",
      "Telemetry and adversary behavior analysis.",
      "Technical mapping with MITRE ATT&CK and Cyber Kill Chain.",
    ],
    "Detection Engineering": [
      "Design of behavior-oriented detection logic.",
      "Construction and validation of KQL queries.",
      "Event correlation across SIEM and telemetry sources.",
    ],
    "DFIR & Incident Response": [
      "Analysis of Windows, Linux, and endpoint activity events.",
      "Technical support for triage, investigation, and incident response.",
      "Artifact review with Sysmon, Velociraptor, and security logs.",
    ],
    "Cloud Security": [
      "Activity analysis in Azure and AWS environments.",
      "Review of identity, access, and cloud activity events.",
      "Technical support for multi-cloud SOC and IR operations.",
    ],
    "Security Labs & Engineering": [
      "Construction of reproducible security labs.",
      "Automation and scripting with Python, Docker, Linux, and WSL.",
      "Technical documentation of investigations, detections, and procedures.",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What do I do?
      </h3>

      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}

                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[var(--sec)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;