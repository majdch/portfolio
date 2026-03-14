import React from 'react';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";
import DownloadCV from "../../components/DownloadCV";

const Resume = () => {
    return (
        <div className="page" id="resume">
            <div className="resume-header">
                <div className="resume-download-wrapper">
                    <DownloadCV />
                </div>
            </div>

            <Title>
                Experience
            </Title>
            <div className="resume-timeline">
                <ResumeItem
                    date={'April 2025 – Present'}
                    title={'Senior SAP Basis Consultant'}
                    company={'Inetum Business Line SAP Africa'}
                    location={'Casablanca, Morocco'}
                    logo={'https://media.licdn.com/dms/image/v2/D4E0BAQGXCWtYPQqNWA/company-logo_200_200/B4EZwJQyCRGsAM-/0/1769681920574/inetum_logo?e=1775088000&v=beta&t=iXVSIaOb2D9QLIJ8tP_sV1QGc1Z8T4lmR1-TkHDo8jA'}
                    projects={[
                        {
                            title: 'S/4HANA 2025 Greenfield Implementation — Agribusiness, Morocco',
                            points: [
                                'Led full On-Premise Greenfield install: SWPM (primary & app servers), HDBLCM (SAP HANA DB), Quick Sizer, kernel upgrade, STMS — zero P1 incidents at Go-Live.',
                                'Configured RZ10 profiles, SM36/SM37 scheduling, spool management, CCMS (RZ20) monitoring baseline and Solution Manager landscape registration.'
                            ],
                            tools: 'SWPM · HDBLCM · SAP S/4HANA 2025 · SAP HANA · Quick Sizer · STMS · RZ10 · RZ20 · SM36/SM37 · SUM'
                        },
                        {
                            title: 'SAP Ariba Integration & SSO via Azure AD — Telecom, Morocco',
                            points: [
                                'Installed SAP Ariba and configured RFC/IDOC connectivity with ECC; set up SSO via Azure AD (SAML 2.0), managed STRUST certificates, troubleshot flows via SM21/ST05 — zero SSO incidents post-Go-Live.'
                            ],
                            tools: 'SAP ECC · SAP Ariba · Azure AD · SAML 2.0 · STRUST · SM21 · ST05 · RFC · IDOC'
                        },
                        {
                            title: 'Cloud-Native Identity Governance (IAS/IPS/IAG) — Pharma, Morocco',
                            points: [
                                'Deployed Zero Trust identity architecture on SAP BTP integrated directly with S/4HANA On-Premise (no GRC tenant): IAS as central IdP (SAML 2.0 SSO), IPS for automated provisioning, IAG as BTP-native SoD enforcement and access governance layer.',
                                'Configured IAG access requests, certification campaigns, SoD rules — eliminated all critical violations; secured via OAuth 2.0 (SOAMANAGER) and SSL/TLS (STRUST).'
                            ],
                            tools: 'SAP IAG · SAP IAS · SAP IPS · SAP BTP · S/4HANA · SAML 2.0 · OAuth 2.0 · SOAMANAGER · STRUST · PFCG · SU01'
                        },
                        {
                            title: 'SAP OPPS & DMS Integration — Agriculture/Food/Beverage, Morocco',
                            points: [
                                'Led S/4HANA integration with OPPS via SM59, SICF activation, OAuth 2.0 (SOAMANAGER), SSL trust — zero incidents post-Go-Live.'
                            ],
                            tools: 'SAP S/4HANA · SOAMANAGER · STRUST · SICF · SM59 · OAuth 2.0'
                        },
                        {
                            title: 'SAP Authorization Training & FUE License Optimization — Agribusiness, Morocco',
                            points: [
                                'Delivered SAP Authorization curriculum (PFCG, ST01/SU53, SoD). Led FUE classification remapping 100% of roles — reduced TCO.'
                            ],
                            tools: 'PFCG · SU01 · ST01 · SU53 · SoD Framework · License Management'
                        }
                    ]}
                />
                
                <ResumeItem
                    date={'June 2022 – March 2025'}
                    title={'Confirmed SAP Basis Consultant'}
                    company={'VISEO North Africa'}
                    location={'Casablanca, Morocco'}
                    logo={'https://media.licdn.com/dms/image/v2/D4E0BAQH5QJs6yIaC8g/company-logo_200_200/B4EZme5WvTHgAI-/0/1759307459886/viseo_logo?e=1775088000&v=beta&t=h9H4vImmRQrx-H-9WlEOBR2QD2uCTSyuyXrHZ0UV8xM'}
                    projects={[
                        {
                            title: 'SAP Authorization & Access Management — Luxury Fashion House, France',
                            points: [
                                'Managed user lifecycle for 500+ ECC users; 100% audit readiness, 0% SLA breach. ST01/SU53 incident resolution; ChaRM transport coordination — 3 improvements cut incidents by ~30%.'
                            ],
                            tools: 'SAP ECC · TPAM · PFCG · SU01 · SU53 · ST01 · ChaRM'
                        },
                        {
                            title: 'CUA Implementation & Fiori Customization — VISEO Internal, France',
                            points: [
                                'SAP CUA across 5+ systems — admin effort -40%. Fiori Launchpad theme, catalog and group customization via PFCG.'
                            ],
                            tools: 'SAP CUA · Fiori Launchpad · PFCG · RFC · SU01'
                        },
                        {
                            title: 'ECC 6 Unicode Conversion — Global Fermentation Company, France',
                            points: [
                                'Contributed to Unicode migration of legacy ECC 6 via SWPM and Unicode Conversion Tool — zero data loss.'
                            ],
                            tools: 'SAP ECC 6 · SWPM · Unicode Conversion Tool · SPDD · SPAU'
                        },
                        {
                            title: 'SAP Content Server & ADS — VISEO Internal, France',
                            points: [
                                'Deployed SAP Content Server (DB growth -20%/yr) and ADS for PDF generation; full integration validation.'
                            ],
                            tools: 'SAP Content Server · ADS · HTTP RFC'
                        },
                        {
                            title: 'S/4HANA FPS & HR SPS Upgrades — Industrial Engineering, France',
                            points: [
                                'Led FPS updates via SUM (SBX/QA/PRD): SPAU/SPDD, kernel upgrade, zero regressions. HR SPS upgrades — full payroll compliance.'
                            ],
                            tools: 'SAP S/4HANA · SUM · SPAU · SPDD · SAINT · SPAM · Kernel Upgrade'
                        },
                        {
                            title: 'SAP Business One → AWS Migration — Waste Management, France',
                            points: [
                                '2-person team: SAP B1 migration to AWS, EC2/RDS provisioning, SQL Server restore — zero data loss.'
                            ],
                            tools: 'SAP Business One · AWS EC2 · AWS RDS · SQL Server'
                        }
                    ]}
                />

                <ResumeItem
                    date={'September 2021 – May 2022'}
                    title={'SAP Basis Consultant'}
                    company={'Inetum Business Line SAP Africa'}
                    location={'Casablanca, Morocco'}
                    logo={'https://media.licdn.com/dms/image/v2/D4E0BAQGXCWtYPQqNWA/company-logo_200_200/B4EZwJQyCRGsAM-/0/1769681920574/inetum_logo?e=1775088000&v=beta&t=iXVSIaOb2D9QLIJ8tP_sV1QGc1Z8T4lmR1-TkHDo8jA'}
                    projects={[
                        {
                            title: 'SAP Analytics Cloud — Healthcare/Banking/Distribution, Morocco',
                            points: [
                                'SAC deployment for 3+ clients; BW-to-SAC Live Data Connections via Cloud Connector; Oracle and SQL Server integration.'
                            ],
                            tools: 'SAP Analytics Cloud · SAP Cloud Connector · BW/4HANA · Oracle · SQL Server'
                        },
                        {
                            title: 'ECC to S/4HANA Brownfield Conversion — Bottling, Morocco',
                            points: [
                                'Readiness Check, P1 pre-checks, SUM/DMO execution with SPDD/SPAU.'
                            ],
                            tools: 'SUM/DMO · S/4HANA Readiness Check · SPDD · SPAU'
                        },
                        {
                            title: 'SAP Infrastructure on Azure — Africa Region',
                            points: [
                                'Azure VM provisioning per SAP sizing; Ansible & Terraform automation; NSG rules — 99.9% uptime, reduced costs.'
                            ],
                            tools: 'Microsoft Azure · Ansible · Terraform · PowerShell · Bash · Linux SUSE/RHEL'
                        },
                        {
                            title: 'PCoE Recertification — Inetum Internal, Morocco',
                            points: [
                                'PCoE lifecycle management; Solution Manager 7.2; EarlyWatch Alert analysis — improved system KPIs.'
                            ],
                            tools: 'SAP Solution Manager 7.2 · EarlyWatch Alert · LMDB'
                        }
                    ]}
                />

                <ResumeItem
                    date={'February 2021 – August 2021'}
                    title={'SAP Basis Consultant (Intern)'}
                    company={'Inetum Business Line SAP Africa'}
                    location={'Casablanca, Morocco'}
                    logo={'https://media.licdn.com/dms/image/v2/D4E0BAQGXCWtYPQqNWA/company-logo_200_200/B4EZwJQyCRGsAM-/0/1769681920574/inetum_logo?e=1775088000&v=beta&t=iXVSIaOb2D9QLIJ8tP_sV1QGc1Z8T4lmR1-TkHDo8jA'}
                    projects={[
                        {
                            title: 'SAP DSD Migration: Windows Mobile → Android — Bottling, Morocco',
                            points: [
                                'Reconfigured SAP ECC backend; deployed SAP Web Dispatcher for HTTPS routing to mobile field-sales teams.'
                            ],
                            tools: 'SAP ECC · SAP Web Dispatcher · XAMARIN · Android DSD · ICM'
                        }
                    ]}
                />
            </div>
      
            <Title>
                Education
            </Title>
            <div className="resume-timeline">
                <ResumeItem
                    date={'2016 – 2021'}
                    title={"Engineer's Degree (BAC+5 — Master Level)"}
                    company={'National School of Applied Sciences (ENSA), Tetouan'}
                    location={'Tetouan, Morocco'}
                    projects={[
                        {
                            title: 'Computer Engineering, Information Systems & Decision Support',
                            points: [
                                'State-accredited 5-year Engineering Diploma (EQF Level 7), equivalent to a European Master\'s degree. Admitted via national competitive entrance exam (Concours National Commun).'
                            ]
                        }
                    ]}
                />
                <ResumeItem
                    date={'2013 – 2016'}
                    title={'Preparatory Classes for the Grandes Écoles (CPGE)'}
                    company={'Moulay Idriss School'}
                    location={'Morocco'}
                    projects={[
                        {
                            title: 'Physics & Engineering Sciences (PSI)',
                            points: ['Intensive preparatory programme (CPGE) for competitive entrance to top engineering schools in Morocco and France.Section: Physics & Engineering Sciences (PSI) — advanced mathematics, physics, mechanics, and engineering fundamentals.']
                        }
                    ]}
                />
            </div>
            
            <Title>
                Skills
            </Title>
            <div className="skills-section">
                <div className="skill-group">
                    <h4>SAP Basis & Admin</h4>
                    <div className="skill-tags">
                        <span>SAP S/4HANA 2023/2025</span><span>SAP ECC 6.0</span><span>SAP NetWeaver 7.x</span>
                        <span>SWPM</span><span>HDBLCM</span><span>SUM/DMO</span><span>SPAM/SAINT</span>
                        <span>SPAU/SPDD</span><span>Kernel Upgrade</span><span>STMS</span><span>RZ10</span>
                        <span>SM36/SM37</span><span>CCMS (RZ20)</span><span>Web Dispatcher</span><span>ICM</span>
                        <span>SAP Cloud Connector</span><span>Fiori Launchpad</span><span>Solution Manager 7.2</span>
                        <span>SAP BTP</span><span>SAP Business One</span>
                    </div>
                </div>
                
                <div className="skill-group">
                    <h4>Cloud Identity & Security</h4>
                    <div className="skill-tags">
                        <span>SAP IAS</span><span>SAP IPS</span><span>SAP IAG</span><span>PFCG</span>
                        <span>SU01</span><span>ST01</span><span>SU53</span><span>SAML 2.0</span>
                        <span>OAuth 2.0</span><span>SSL/TLS (STRUST)</span><span>SOAMANAGER</span>
                        <span>SICF</span><span>SM59</span><span>TPAM</span><span>Azure AD federation</span>
                        <span>SoD Management</span>
                    </div>
                </div>

                <div className="skill-group">
                    <h4>SAP HANA & Database</h4>
                    <div className="skill-tags">
                        <span>SAP HANA 2.0</span><span>HDBLCM</span><span>System Replication (HSR)</span>
                        <span>HANA Studio</span><span>HANA Cockpit</span><span>Oracle DB</span>
                        <span>SQL Server</span><span>MaxDB</span><span>MySQL</span>
                    </div>
                </div>

                <div className="skill-group">
                    <h4>Cloud & Infrastructure</h4>
                    <div className="skill-tags">
                        <span>Microsoft Azure</span><span>AWS (EC2/RDS)</span><span>Linux SUSE/RHEL</span>
                        <span>Windows Server</span><span>Ansible</span><span>Terraform</span>
                        <span>Pacemaker HA</span><span>PowerShell</span><span>Bash</span>
                    </div>
                </div>

                <div className="skill-group">
                    <h4>Integration & Development</h4>
                    <div className="skill-tags">
                        <span>RFC</span><span>IDOC</span><span>REST/SOAP</span><span>ICF/SICF</span>
                        <span>XML</span><span>JSON</span><span>Python</span><span>Shell Scripting</span>
                        <span>GitLab</span><span>GitHub</span>
                    </div>
                </div>

                <div className="skill-group">
                    <h4>Core Competencies</h4>
                    <div className="skill-tags">
                        <span>Project Ownership</span><span>Technical Leadership</span><span>Team Mentoring</span>
                        <span>Stakeholder Communication</span><span>RCA</span><span>SLA/KPI Management</span>
                        <span>Capacity Planning</span><span>HLD/LLD Documentation</span><span>FinOps</span>
                        <span>SAP Activate</span><span>ITIL</span>
                    </div>
                </div>
            </div>

            <Title>
                Certifications
            </Title>
            <div className="certifications-section">
                <div className="cert-card">
                    <img src="https://media.licdn.com/dms/image/v2/D560BAQGmwwo0aq4jVA/company-logo_200_200/company-logo_200_200/0/1723034255614/sap_logo?e=1775088000&v=beta&t=mTu0Jxtfrlqeecetle_gRB_I4YngBI2-CCnikI2TX4w" alt="SAP Logo" />
                    <div className="cert-info">
                        <h4>SAP Certified Associate — SAP S/4HANA System Administration</h4>
                        <div className="cert-badges">
                            <span className="code-badge">C_TADM_23</span>
                            <span className="valid-badge">Valid until 2027</span>
                        </div>
                    </div>
                </div>
                
                <div className="cert-card">
                    <img src="https://media.licdn.com/dms/image/v2/D560BAQGmwwo0aq4jVA/company-logo_200_200/company-logo_200_200/0/1723034255614/sap_logo?e=1775088000&v=beta&t=mTu0Jxtfrlqeecetle_gRB_I4YngBI2-CCnikI2TX4w" alt="SAP Logo" />
                    <div className="cert-info">
                        <h4>SAP Certified Associate — Database Administrator, SAP HANA</h4>
                        <div className="cert-badges">
                            <span className="code-badge">C_DBADM_2404</span>
                            <span className="valid-badge">Valid until 2027</span>
                        </div>
                    </div>
                </div>

                <div className="cert-card">
                    <img src="https://media.licdn.com/dms/image/v2/D560BAQGmwwo0aq4jVA/company-logo_200_200/company-logo_200_200/0/1723034255614/sap_logo?e=1775088000&v=beta&t=mTu0Jxtfrlqeecetle_gRB_I4YngBI2-CCnikI2TX4w" alt="SAP Logo" />
                    <div className="cert-info">
                        <h4>SAP Certified Specialist — S/4HANA Conversion & System Upgrade</h4>
                        <div className="cert-badges">
                            <span className="code-badge">E_S4CON2023</span>
                            <span className="valid-badge">Valid until 2027</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
