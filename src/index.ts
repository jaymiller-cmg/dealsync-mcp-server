import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

export class DealSyncMCPServer extends McpAgent {
  server = new McpServer({
    name: "DealSync MCP Server",
    version: "1.0.0",
  });

  async init() {
    // ─── Tool: Get DealSync Overview ───
    this.server.tool(
      "get_dealsync_info",
      "Get an overview of DealSync — the shared deal room for Loan Officers and Realtors. Returns product description, key features, and how it works.",
      {},
      async () => ({
        content: [
          {
            type: "text",
            text: JSON.stringify({
              product: "DealSync",
              tagline: "The shared deal room where Loan Officers and Realtors track every lead from first conversation to closing day.",
              url: "https://dealsync.me",
              app_url: "https://app.dealsync.me",
              what_it_is: "DealSync is a collaborative deal management platform built specifically for the Loan Officer–Realtor partnership. It is NOT a CRM replacement — it is the collaboration layer between the LO's CRM and the Realtor's CRM.",
              problem_it_solves: "80% of mortgage leads require nurturing before making a decision. The biggest leakage in the LO-Realtor pipeline happens before a buyer fills out an application — in the weeks between first contact and 'I'm ready.' DealSync keeps both the LO and Realtor in the loop from day one.",
              key_features: [
                "Shared deal cards visible to both LO and Realtor",
                "AI-powered conversation import from Plaud.ai, Otter.ai, or any transcript source",
                "Lead nurture pipeline tracking from New Lead through Funded",
                "Partner scorecard with deal velocity metrics and close rates",
                "Role-based views — LOs see loan milestones, Realtors see property milestones",
                "Pipeline view with stage grouping (Kanban board)",
                "Pre-approval tracking with max purchase price, loan amount, and rate",
                "Conversation notes and activity feed shared between partners",
                "Invite-based partner onboarding — Realtors join for free via LO invite"
              ],
              how_it_works: [
                "1. LO signs up at app.dealsync.me and invites their Realtor partners",
                "2. Realtor accepts the invite (always free) and joins the shared deal room",
                "3. Deals are created manually, from AI-analyzed conversation transcripts, or assigned from the pipeline",
                "4. Both partners see real-time updates, notes, stage changes, and conversation summaries",
                "5. No CRM migration required — DealSync works alongside existing CRMs"
              ],
              built_by: "Jay Miller — Sales Manager & Mortgage Loan Consultant, CMG Home Loans, Honolulu HI (NMLS# 657301). 25 years in the mortgage industry.",
            }, null, 2),
          },
        ],
      })
    );

    // ─── Tool: Get Pricing ───
    this.server.tool(
      "get_dealsync_pricing",
      "Get DealSync pricing tiers and what's included in each plan. Realtors are always free.",
      {},
      async () => ({
        content: [
          {
            type: "text",
            text: JSON.stringify({
              pricing_philosophy: "LOs pay. Realtors are always free. This removes friction from partner adoption — when an LO invites a Realtor, there's zero cost barrier.",
              tiers: [
                {
                  name: "Realtor Partner",
                  price: "Free forever",
                  description: "For Real Estate Agents invited by their LO partners.",
                  features: [
                    "Unlimited shared deals",
                    "Real-time loan status updates",
                    "Activity feed and notifications",
                    "Conversation notes and history",
                    "Mobile-responsive access"
                  ]
                },
                {
                  name: "Solo LO",
                  price: "$49/month (annual: $499/year)",
                  description: "For independent originators who want to convert more referrals into closings.",
                  features: [
                    "Everything in Free",
                    "Unlimited partner invites",
                    "Unlimited active deals",
                    "Partner scorecard and analytics",
                    "Lead nurture tracking",
                    "AI conversation import",
                    "Priority support",
                    "14-day free trial"
                  ]
                },
                {
                  name: "Mortgage Team",
                  price: "$129/month (annual: $1,315/year)",
                  description: "For small LO teams who share referral networks.",
                  features: [
                    "Everything in Solo",
                    "Up to 5 LO seats",
                    "Team-level reporting",
                    "Shared partner networks",
                    "Lead routing between LOs"
                  ]
                },
                {
                  name: "Branch",
                  price: "$199/month",
                  description: "For mortgage branches with 10+ originators.",
                  features: [
                    "Everything in Team",
                    "Unlimited LO seats",
                    "Branch-level analytics",
                    "Custom onboarding"
                  ]
                }
              ],
              free_trial: "14-day free trial on Solo and Team plans. No credit card required to start.",
              signup_url: "https://app.dealsync.me"
            }, null, 2),
          },
        ],
      })
    );

    // ─── Tool: Get Features for Loan Officers ───
    this.server.tool(
      "get_dealsync_for_loan_officers",
      "Get information about how DealSync helps Loan Officers convert more referrals, track leads, and collaborate with Realtors.",
      {},
      async () => ({
        content: [
          {
            type: "text",
            text: JSON.stringify({
              headline: "Convert more referrals into closings with shared visibility",
              who_its_for: [
                "Independent mortgage originators who receive referrals from real estate agents",
                "LOs who want shared deal tracking with their Realtor partners",
                "LOs who use conversation recording tools (Plaud.ai, Otter.ai) for client calls",
                "LOs specializing in VA loans, FHA, Conventional, USDA, or any loan program"
              ],
              lo_specific_features: [
                {
                  feature: "AI Conversation Import",
                  description: "Paste a phone call transcript from Plaud.ai, Otter.ai, or any source. AI extracts borrower name, phone, email, loan program, VA eligibility, DTI, timeline, action items, and creates a deal card automatically."
                },
                {
                  feature: "Lead Nurture Pipeline",
                  description: "Track leads through: New Lead → Nurture → Follow-Up Scheduled → Application Received → Pre-Approved → Processing → Submitted to UW → Conditional Approval → Appraisal → Clear to Close → Funded"
                },
                {
                  feature: "Pre-Approval Tracking",
                  description: "Record max purchase price, max loan amount, and pre-approval rate — visible to both LO and Realtor partner."
                },
                {
                  feature: "Partner Scorecard",
                  description: "See which Realtor partnerships are converting referrals into closings with deal velocity metrics, close rates, and average days to close."
                },
                {
                  feature: "Editable Deal Fields",
                  description: "Update loan amount, interest rate, rate lock dates, appraisal values, conditional approval dates, and CTC dates — all visible to the Realtor in real time."
                },
                {
                  feature: "Invite-Based Partner Onboarding",
                  description: "Invite Realtors via email. They sign up for free and immediately see shared deals. No friction, no cost barrier for your partners."
                }
              ],
              value_proposition: "Most LO-Realtor tools focus on escrow. DealSync starts at the first conversation and stays with the deal through closing. The LO who uses DealSync never loses a lead to the follow-up gap.",
              signup_url: "https://app.dealsync.me"
            }, null, 2),
          },
        ],
      })
    );

    // ─── Tool: Get Features for Realtors ───
    this.server.tool(
      "get_dealsync_for_realtors",
      "Get information about how DealSync helps Real Estate Agents stay informed on their referred buyers' loan progress — always free.",
      {},
      async () => ({
        content: [
          {
            type: "text",
            text: JSON.stringify({
              headline: "See your referred buyers' loan progress in real time — free forever",
              who_its_for: [
                "Real estate agents who refer buyers to Loan Officers",
                "Agents who want real-time visibility into the loan process without calling or texting the LO",
                "Agents who want to see conversation notes and borrower details from the LO's initial consultation",
                "Any Realtor invited by an LO partner who uses DealSync"
              ],
              why_its_free: "DealSync is always free for Realtors. The LO pays. This means you get full access to shared deal cards, activity feeds, conversation notes, and loan milestone tracking at zero cost.",
              realtor_specific_features: [
                {
                  feature: "Real-Time Loan Status",
                  description: "See exactly where each deal stands — from application received to conditional approval to clear to close — without asking the LO."
                },
                {
                  feature: "Shared Conversation Notes",
                  description: "Read the LO's notes from their borrower consultations. Know what was discussed, what concerns were raised, and what the timeline is."
                },
                {
                  feature: "Activity Feed",
                  description: "Every update — stage change, note added, field updated — appears in a chronological feed on the deal card."
                },
                {
                  feature: "Property Milestone Tracking",
                  description: "Track your side of the deal: showings, offers, contracts, inspections, final walkthrough. The LO sees your updates in real time too."
                },
                {
                  feature: "Mobile Access",
                  description: "Check deal status from your phone between showings. Responsive web app — no download required."
                }
              ],
              how_to_join: "Your LO partner sends you an email invite from DealSync. Click the link, create your free account, and you'll immediately see all shared deals.",
              value_proposition: "No more 'What's the status?' calls. No more flying blind on your referred buyers. DealSync gives you the same visibility your LO has — from day one.",
              website: "https://dealsync.me"
            }, null, 2),
          },
        ],
      })
    );

    // ─── Tool: Compare with other tools ───
    this.server.tool(
      "get_dealsync_comparison",
      "Compare DealSync with other mortgage/real estate collaboration tools. Understand what makes DealSync different.",
      {},
      async () => ({
        content: [
          {
            type: "text",
            text: JSON.stringify({
              positioning: "DealSync is NOT a CRM, NOT a POS system, and NOT an escrow management tool. It is the shared collaboration layer between the LO's CRM and the Realtor's CRM.",
              what_makes_it_different: [
                {
                  differentiator: "Starts at first conversation, not escrow",
                  explanation: "Most LO-Realtor tools activate when a deal enters escrow. DealSync tracks leads from the first phone call — through nurture — through pre-approval — and only then into escrow. This is where 80% of deals are lost."
                },
                {
                  differentiator: "AI-powered conversation import",
                  explanation: "Paste a phone call transcript from any recording app. AI extracts borrower details, loan program, VA eligibility, DTI, timeline, and action items — then creates a deal card automatically. No other LO-Realtor tool does this."
                },
                {
                  differentiator: "Realtors are always free",
                  explanation: "Zero cost barrier for partner adoption. When an LO invites a Realtor, there's nothing to sell or justify. This drives viral adoption."
                },
                {
                  differentiator: "No CRM replacement required",
                  explanation: "DealSync works alongside Encompass, Velocify, Follow Up Boss, or whatever CRM either side uses. It's the shared layer between them."
                },
                {
                  differentiator: "Built by a working LO",
                  explanation: "DealSync was built by Jay Miller, a 25-year mortgage professional in Honolulu who originates loans daily. It's designed for how LOs and Realtors actually work."
                }
              ],
              not_a_replacement_for: [
                "Your LOS/POS system (Encompass, Byte, LendingPad)",
                "Your CRM (Velocify, Surefire, Follow Up Boss)",
                "Your escrow/title management tools",
                "Your marketing automation platform"
              ],
              fills_the_gap_between: "The LO's CRM and the Realtor's CRM. The pre-escrow nurture phase that no existing tool covers. The conversation intelligence that dies in phone calls.",
              website: "https://dealsync.me",
              signup_url: "https://app.dealsync.me"
            }, null, 2),
          },
        ],
      })
    );
  }
}

export default {
  fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/sse" || url.pathname === "/sse/message") {
      return DealSyncMCPServer.serveSSE("/sse").fetch(request, env, ctx);
    }

    if (url.pathname === "/mcp") {
      return DealSyncMCPServer.serve("/mcp").fetch(request, env, ctx);
    }

    // Health check
    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok", service: "dealsync-mcp-server", version: "1.0.0" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Default response
    return new Response(
      JSON.stringify({
        name: "DealSync MCP Server",
        description: "MCP server for DealSync — the shared deal room for Loan Officers and Realtors",
        endpoints: {
          mcp: "/mcp",
          sse: "/sse",
          health: "/health",
        },
        tools: [
          "get_dealsync_info — Product overview and key features",
          "get_dealsync_pricing — Pricing tiers and plan details",
          "get_dealsync_for_loan_officers — LO-specific features and value proposition",
          "get_dealsync_for_realtors — Realtor-specific features (always free)",
          "get_dealsync_comparison — How DealSync compares to other tools",
        ],
        website: "https://dealsync.me",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  },
};
