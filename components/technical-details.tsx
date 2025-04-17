"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Server, Shield } from "lucide-react"

export default function TechnicalDetails() {
  return (
    <section id="technical-details" className="inspira-section bg-black">
      <div className="inspira-container">
        <div className="text-center mb-16">
          <h2 className="inspira-heading text-white">Technical Implementation Details</h2>
          <p className="inspira-subheading">
            A comprehensive technical architecture designed for security, scalability, and scientific advancement.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl backdrop-blur-sm bg-black/40 p-6 rounded-xl border border-primary/20 shadow-xl">
            <Tabs defaultValue="blockchain" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-black/50 border border-primary/20 mb-6">
                <TabsTrigger value="blockchain" className="data-[state=active]:bg-primary/30 flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span className="hidden md:inline">Blockchain</span>
                </TabsTrigger>
                <TabsTrigger value="storage" className="data-[state=active]:bg-primary/30 flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  <span className="hidden md:inline">Storage</span>
                </TabsTrigger>
                <TabsTrigger value="application" className="data-[state=active]:bg-primary/30 flex items-center gap-2">
                  <Server className="h-4 w-4" />
                  <span className="hidden md:inline">Application</span>
                </TabsTrigger>
                <TabsTrigger value="security" className="data-[state=active]:bg-primary/30 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span className="hidden md:inline">Security</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="blockchain" className="text-white/80">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">Blockchain Layer</h3>
                  <div className="mb-6 p-4 bg-black/60 rounded-md border border-primary/10 font-mono text-sm overflow-x-auto">
                    <pre>
                      {`└── Smart Contracts
    ├── DataRegistry.sol           # Registers data metadata and access rules
    ├── AccessControl.sol          # Manages permissions and access requests
    ├── TokenEconomy.sol           # Handles OBC token transactions and rewards
    ├── GovernanceModule.sol       # Manages proposals and voting
    └── FederatedLearningCoord.sol # Coordinates federated learning rounds`}
                    </pre>
                  </div>

                  <h4 className="text-lg font-semibold mb-2 text-white">Key Technical Specifications</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Blockchain:</strong> Ethereum for smart contracts, Polygon for scaling
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Smart Contract Language:</strong> Solidity 0.8.x
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Contract Standards:</strong> ERC-20 (tokens), ERC-725 (identity), ERC-1155 (data
                      certificates)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Cross-chain Bridge:</strong> For potential integration with Filecoin/IPFS
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Audited Security:</strong> Smart contracts will be audited by established security firms
                    </li>
                  </ul>
                </motion.div>
              </TabsContent>

              <TabsContent value="storage" className="text-white/80">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">Storage Layer</h3>
                  <div className="mb-6 p-4 bg-black/60 rounded-md border border-primary/10 font-mono text-sm overflow-x-auto">
                    <pre>
                      {`└── Storage System
    ├── Metadata Index             # On-chain registry of all datasets
    ├── Distributed Storage        # Encrypted medical data on Filecoin/IPFS
    ├── Access Control Matrices    # Permission settings for each dataset
    └── Versioning System          # Data versioning and change tracking`}
                    </pre>
                  </div>

                  <h4 className="text-lg font-semibold mb-2 text-white">Key Technical Specifications</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Primary Storage:</strong> Filecoin for long-term storage
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Content Addressing:</strong> IPFS for content-addressable data
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Encryption:</strong> AES-256 for file encryption, threshold encryption for shared access
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Compression:</strong> Domain-specific medical image compression algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Integration with NASA Standards:</strong> Compatible with NASA's FITS format
                    </li>
                  </ul>
                </motion.div>
              </TabsContent>

              <TabsContent value="application" className="text-white/80">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">Application Layer</h3>
                  <div className="mb-6 p-4 bg-black/60 rounded-md border border-primary/10 font-mono text-sm overflow-x-auto">
                    <pre>
                      {`└── Web Application
    ├── Frontend                   # User interface for all stakeholders
    │   ├── Data Dashboard         # Browsing and management interface
    │   ├── Analysis Workbench     # Jupyter integration for data analysis
    │   ├── Governance Portal      # DAO participation interface
    │   └── Wallet Integration     # Token and identity management
    │
    └── Backend
        ├── API Gateway            # RESTful services for frontend
        ├── Authentication         # Hybrid auth supporting Web2/Web3
        ├── Analytics Engine       # Processing for data visualization
        └── Federated Learning     # Distributed ML coordination`}
                    </pre>
                  </div>

                  <h4 className="text-lg font-semibold mb-2 text-white">Key Technical Specifications</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Frontend Framework:</strong> React.js with Tailwind CSS
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Backend:</strong> Node.js with Express
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Authentication:</strong> OAuth 2.0 + Web3 wallet support
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>API Documentation:</strong> OpenAPI specification
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>FHIR Compatibility:</strong> Implementation of healthcare interoperability standards
                    </li>
                  </ul>
                </motion.div>
              </TabsContent>

              <TabsContent value="security" className="text-white/80">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-primary">Security Framework</h3>
                  <div className="mb-6 p-4 bg-black/60 rounded-md border border-primary/10 font-mono text-sm overflow-x-auto">
                    <pre>
                      {`└── Security Framework
    ├── Access Control             # Role-based + attribute-based access control
    ├── Encryption Layer           # End-to-end encryption for sensitive data
    ├── Audit System               # Comprehensive logging and monitoring
    └── Vulnerability Management   # Regular security assessments`}
                    </pre>
                  </div>

                  <h4 className="text-lg font-semibold mb-2 text-white">Key Technical Specifications</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Identity Verification:</strong> Zero-knowledge proofs for privacy-preserving
                      authentication
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Key Management:</strong> Hierarchical deterministic wallets with multi-signature support
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Audit Trails:</strong> Immutable logging on blockchain
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Threat Monitoring:</strong> Real-time intrusion detection system
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <strong>Compliance:</strong> Implementation of security controls aligned with space agency
                      requirements
                    </li>
                  </ul>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
