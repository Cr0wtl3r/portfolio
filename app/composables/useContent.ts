export const useContent = () => {
    const content = {
        en: {
            headerPrompt: "┌──(cr0wtl3r㉿kali)-[~/offensive-security]<br>└─$ ./init_profile.sh --force",
            homeSubtitle: "Junior Pentester | Red Team Operator | Bug Hunter | Tool Developer",
            typingText: [
                "> [SYSTEM] Initializing Offensive Security Module...",
                "> [CHECK] Loading exploits and wordlists... OK.",
                "> [AUTH] Identity confirmed: Albino M. Santos (cr0wtl3r).",
                "> [READY] Target locked: Cybersecurity Opportunities.",
            ],
            viewProfileText: "> cat /etc/shadow && execute_portfolio.elf",

            aboutPrompt: "┌──(cr0wtl3r㉿root)-[/opt/about]<br>└─# whoami",
            skillsPrompt: "┌──(cr0wtl3r㉿root)-[/opt/arsenal]<br>└─# ls -la",
            projectsPrompt: "┌──(cr0wtl3r㉿root)-[/opt/dev-tools]<br>└─# cargo run",
            experiencePrompt: "┌──(cr0wtl3r㉿root)-[/var/log/career]<br>└─# history",
            contactPrompt: "┌──(cr0wtl3r㉿root)-[/tmp/comms]<br>└─# nc -lvnp 1337",

            aboutOverview: [
                "Offensive Security Professional (Pentest & Red Team) with a strong infrastructure background. My transition from IT Analyst to Ethical Hacker allows me not only to exploit flaws but to deeply understand target architecture (sysadmin mindset).",
                "I actively participate in Bug Bounty programs and CTFs, focusing on Web Hacking (OWASP Top 10) and active exploitation. Developer of Security Tooling in Go, Rust, and Python for Recon and attack automation. Currently focused on obtaining CRTA and expanding Red Team methodologies."
            ],
            skillsCategories: [
                {
                    title: "Red Team & Infrastructure",
                    list: [
                        "Active Directory Exploitation (Kerberoasting, DCSync, LLMNR Poisoning)",
                        "Azure AD & Cloud Security (AWS/GCP)",
                        "Command & Control (C2 Frameworks)",
                        "AV/EDR Evasion & Bypass (Basic Techniques)",
                        "Linux Hardening & Internals (Arch/Debian)"
                    ]
                },
                {
                    title: "Web Hacking & Bug Bounty",
                    list: [
                        "OWASP Top 10 & WSTG Methodology",
                        "Burp Suite (Extensions & Advanced Workflows)",
                        "Advanced Fuzzing (Ffuf, Feroxbuster, Scripts)",
                        "Automated Reconnaissance (Amass, Subfinder, Naabu)",
                        "Vulnerability Assessment & Reporting"
                    ]
                },
                {
                    title: "Dev & Security Tooling",
                    list: [
                        "Python (Scripting & Automation)",
                        "Rust & Go (High performance for port scanners/fuzzers)",
                        "Bash & PowerShell (Living off the Land)",
                        "Docker & Containerization (Exegol/Isolated Environments)"
                    ]
                }
            ],
            experience: [
                {
                    title: "Bug Hunter (Freelance)",
                    company: "HuntersPay & Private Platforms",
                    duration: "05/2025 - Present",
                    description: [
                        "Conducting manual and automated penetration tests on Web, Mobile, and API applications.",
                        "Identification and reporting of vulnerabilities (IDOR, XSS, SQLi, Logic Flaws) following strict triage standards.",
                        "Development of custom scripts in Python/Bash for attack surface reconnaissance and subdomain detection.",
                        "Detailed technical documentation (PoC) for reproduction and remediation of found flaws."
                    ]
                },
                {
                    title: "IT Analyst & Security Enthusiast",
                    company: "V. P Comércio de Informática",
                    duration: "02/2022 - Present",
                    description: [
                        "Acting as an IT technician with direct client interaction and support.",
                        "Development of internal automation and log parsing tools using Rust and Go, optimizing internal workflows.",
                        "Network traffic analysis (Wireshark/Tcpdump) and implementation of network segmentation.",
                        "Patch management and backup/restore policy management to ensure data availability and integrity.",
                        "Acting as Blue Team/SysAdmin: Hardening of Linux and Windows servers for attack mitigation."
                    ]
                },
                {
                    title: "Helpdesk & Network Infrastructure",
                    company: "Belluno Call Center",
                    duration: "05/2017 - 12/2019",
                    description: [
                        "Network incident resolution and advanced routing configuration (BGP, Tunneling) on Mikrotik/Ubiquiti equipment.",
                        "Network protocol analysis for troubleshooting and service availability maintenance.",
                        "Technical mentorship for the Level 1 team, focused on rapid and effective diagnosis.",
                        "Tier 1 support for ISP end-users."
                    ]
                }
            ],
            certifications: [
                "CRTA (Certified Red Team Analyst) - CyberWarFare Labs (In Progress)",
                "CWHI (Crowsec Web Hacking Initial) - HackingClub",
                "Cisco CyberOps Associate - Cybersecurity Operations",
                "Introdução ao Pentest na Prática - DESEC Security",
                "CCNA: Introduction to Networks - Cisco",
                "Degree: Systems Analysis and Development - Unopar"
            ],
            contact: {
                email: "albinoms@pm.me",
                linkedin: "https://www.linkedin.com/in/cr0wtl3r",
                github: "https://github.com/cr0wtl3r"
            }
        },
        pt: {
            headerPrompt: "┌──(cr0wtl3r㉿kali)-[~/offensive-security]<br>└─$ ./init_profile.sh --force",
            homeSubtitle: "Pentester Jr | Red Team Operator | Bug Hunter | Tool Developer",
            typingText: [
                "> [SYSTEM] Inicializando módulo de Segurança Ofensiva...",
                "> [CHECK] Carregando exploits e wordlists... OK.",
                "> [AUTH] Identidade confirmada: Albino M. Santos (cr0wtl3r).",
                "> [READY] Alvo definido: Oportunidades em Cibersegurança.",
            ],
            viewProfileText: "> cat /etc/shadow && executar_portfolio.elf",

            aboutPrompt: "┌──(cr0wtl3r㉿root)-[/opt/about]<br>└─# whoami",
            skillsPrompt: "┌──(cr0wtl3r㉿root)-[/opt/arsenal]<br>└─# ls -la",
            projectsPrompt: "┌──(cr0wtl3r㉿root)-[/opt/dev-tools]<br>└─# cargo run",
            experiencePrompt: "┌──(cr0wtl3r㉿root)-[/var/log/career]<br>└─# history",
            contactPrompt: "┌──(cr0wtl3r㉿root)-[/tmp/comms]<br>└─# nc -lvnp 1337",

            aboutOverview: [
                "Profissional de Segurança Ofensiva (Pentest & Red Team) com forte base em infraestrutura. Minha transição de Analista de TI para Hacker Ético me permite não apenas explorar falhas, mas entender profundamente a arquitetura dos alvos (sysadmin mindset).",
                "Atuo ativamente em programas de Bug Bounty e CTFs, com foco em Web Hacking (OWASP Top 10) e exploração ativa. Desenvolvedor de ferramentas de segurança (Security Tooling) em Go, Rust e Python para automação de Recon e ataques. Atualmente focado em obter a CRTA e expandir metodologias de Red Team."
            ],
            skillsCategories: [
                {
                    title: "Red Team & Infraestrutura",
                    list: [
                        "Active Directory Exploitation (Kerberoasting, DCSync, LLMNR Poisoning)",
                        "Azure AD & Cloud Security (AWS/GCP)",
                        "Command & Control (C2 Frameworks)",
                        "Bypass de AV/EDR (Técnicas Básicas)",
                        "Linux Hardening & Internals (Arch/Debian)"
                    ]
                },
                {
                    title: "Web Hacking & Bug Bounty",
                    list: [
                        "OWASP Top 10 & WSTG Methodology",
                        "Burp Suite (Extensions & Advanced Workflows)",
                        "Fuzzing Avançado (Ffuf, Feroxbuster, Scripts)",
                        "Reconhecimento Automatizado (Amass, Subfinder, Naabu)",
                        "Análise de Vulnerabilidades e Reports"
                    ]
                },
                {
                    title: "Dev & Security Tooling",
                    list: [
                        "Python (Scripting e Automação)",
                        "Rust & Go (Alta performance para port scanners/fuzzers)",
                        "Bash & PowerShell (Living off the Land)",
                        "Docker & Containerização (Exegol/Ambientes Isolados)"
                    ]
                }
            ],
            experience: [
                {
                    title: "Bug Hunter (Freelance)",
                    company: "HuntersPay & Plataformas Privadas",
                    duration: "05/2025 - Atualmente",
                    description: [
                        "Realização de testes de intrusão manuais e automatizados em aplicações Web, Mobile e APIs.",
                        "Identificação e relato de vulnerabilidades (IDOR, XSS, SQLi, Logic Flaws) seguindo padrões de triagem rigorosos.",
                        "Desenvolvimento de scripts personalizados em Python/Bash para reconhecimento de superfície de ataque e detecção de subdomínios.",
                        "Documentação técnica detalhada (PoC) para reprodução e correção das falhas encontradas."
                    ]
                },
                {
                    title: "Analista de TI & Security Enthusiast",
                    company: "V. P Comércio de Informática",
                    duration: "02/2022 - Atualmente",
                    description: [
                        "Atuação como técnico de informática, tendo contato direto com o cliente",
                        "Desenvolvimento de ferramentas internas de automação e parsing de logs utilizando Rust e Go, otimizando trabalho interno.",
                        "Análise de tráfego de rede (Wireshark/Tcpdump) e implementação de segmentação de rede.",
                        "Gestão de patches de segurança e políticas de backup/restore para garantir a disponibilidade e integridade dos dados.",
                        "Atuação como Blue Team/SysAdmin: Hardening de servidores Linux e Windows para mitigação de ataques."
                    ]
                },
                {
                    title: "Helpdesk & Infraestrutura de Redes",
                    company: "Belluno Call Center",
                    duration: "05/2017 - 12/2019",
                    description: [
                        "Resolução de incidentes de rede e configuração avançada de roteamento (BGP, Tunelamento) em equipamentos Mikrotik/Ubiquiti.",
                        "Análise de protocolos de rede para troubleshooting e manutenção da disponibilidade do serviço.",
                        "Mentoria técnica para equipe de Nível 1, focada em diagnóstico rápido e eficaz.",
                        "Suporte básico ao clientes dos provedores."
                    ]
                }
            ],
            certifications: [
                "CRTA (Certified Red Team Analyst) - CyberWarFare Labs (Em andamento)",
                "CWHI (Crowsec Web Hacking Initial) - HackingClub",
                "Cisco CyberOps Associate - Operações de Cibersegurança",
                "Introdução ao Pentest na Prática - DESEC Security",
                "CCNA: Introduction to Networks - Cisco",
                "Graduação: Análise e Desenvolvimento de Sistemas - Unopar"
            ],
            contact: {
                email: "albinoms@pm.me",
                linkedin: "https://www.linkedin.com/in/cr0wtl3r",
                github: "https://github.com/cr0wtl3r"
            }
        }
    }

    const currentLang = useState('locale', () => 'pt')

    return {
        content: computed(() => content[currentLang.value]),
        toggleLang: () => {
            currentLang.value = currentLang.value === 'pt' ? 'en' : 'pt'
        },
        currentLang
    }
}
