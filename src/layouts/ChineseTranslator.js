"use client";

import { useEffect } from "react";

const translations = {
  "Home":"首页", "Services":"服务", "How It Works":"合作流程", "Why Us":"为什么选择我们", "FAQ":"常见问题",
  "Get a Free Assessment":"获取免费评估", "Get a free assessment":"获取免费评估", "See how it works":"查看合作流程",
  "Shopify × Mabang ERP specialists":"Shopify × 马帮 ERP 专业服务",
  "Connect your Shopify operations.":"连接您的 Shopify 业务。", "Scale without the chaos.":"轻松扩展，不再混乱。",
  "We help cross-border Shopify merchants build a clearer, faster order workflow with Mabang ERP — from initial assessment to assisted connection and ongoing support.":"我们帮助跨境 Shopify 商家建立更清晰、更高效的订单流程，从前期评估、马帮 ERP 接入到后续运营支持，全程由专业人员协助。",
  "Human-led setup":"人工协助接入", "Clear service scope":"清晰的服务范围", "Fast response":"快速响应",
  "Integration overview":"集成概览", "STORE":"店铺", "Synced":"已同步", "Orders synced":"已同步订单", "Processing status":"处理状态", "Healthy":"运行正常", "Recent workflow":"近期工作流", "Today":"今天",
  "Connection ready":"连接已就绪", "Workflow verified":"工作流已验证", "GLOBAL ECOMMERCE":"全球电商", "HUMAN SUPPORT":"人工支持",
  "Built for ambitious cross-border sellers":"为成长中的跨境卖家而打造", "WHAT WE DO":"我们的服务",
  "A simpler path from store to ERP operations":"让店铺到 ERP 的运营流程更简单", "HOW IT WORKS":"合作流程",
  "From first conversation to a connected workflow.":"从初次沟通到完成工作流连接。", "WHY CHOOSE US":"为什么选择我们",
  "ERP experience meets real eCommerce understanding":"ERP 经验与真实电商业务理解相结合", "FREE STORE ASSESSMENT":"免费店铺评估",
  "Tell us about your Shopify workflow.":"告诉我们您的 Shopify 业务流程。", "Frequently asked questions":"常见问题",
  "Full name *":"姓名 *", "Work email *":"工作邮箱 *", "WhatsApp / Phone *":"WhatsApp / 电话 *", "Shopify store URL *":"Shopify 店铺链接 *",
  "Monthly order volume":"月订单量", "Main selling market":"主要销售市场", "What do you need help with?":"您需要什么帮助？",
  "Request free assessment":"申请免费评估", "Talk to a specialist":"联系专业顾问", "Explore our process":"查看合作流程",
  "View our services":"查看服务内容", "See how we work":"了解我们的工作方式", "View our process":"查看合作流程",
  "SHOPIFY × MABANG ERP SERVICES":"SHOPIFY × 马帮 ERP 服务", "Practical integration services for":"切合实际的集成服务，助力", "growing merchants.":"成长型商家。",
  "A CLEAR, HUMAN-LED PROCESS":"清晰的人工跟进流程", "Know exactly what happens":"清楚了解", "at every step.":"每一个步骤。",
  "WHY FLOWBRIDGE":"为什么选择 FLOWBRIDGE", "ERP knowledge with an":"ERP 专业知识结合", "eCommerce mindset.":"电商运营思维。",
  "HELP CENTRE":"帮助中心", "Answers before you":"在沟通之前获得", "start the conversation.":"您需要的答案。",
  "OUR SERVICES":"我们的服务", "THE JOURNEY":"合作旅程", "WHY MERCHANTS CHOOSE US":"商家选择我们的原因", "GETTING STARTED":"开始之前",
  "BUILT AROUND YOUR STORE":"围绕您的店铺打造", "CHECKPOINTS THAT MATTER":"关键检查节点", "WHAT GOOD SUPPORT LOOKS LIKE":"优质支持应有的样子", "BEFORE WE CONNECT":"连接之前",
  "SERVICE FIT & DELIVERABLES":"服务匹配与交付成果", "PREPARATION & OWNERSHIP":"准备工作与责任划分", "HOW WE WORK DIFFERENTLY":"我们的不同之处", "MORE COMMON QUESTIONS":"更多常见问题",
  "BEST SUITED FOR":"适合以下客户", "TYPICAL DELIVERABLES":"典型交付成果", "WHAT TO PREPARE":"需要准备什么", "WHO OWNS WHAT":"双方责任划分",
  "OUR PRINCIPLES":"我们的原则", "WHAT THIS MEANS FOR YOU":"这对您意味着什么", "STORE & SYSTEM QUESTIONS":"店铺与系统问题", "COMMERCIAL & SUPPORT QUESTIONS":"商务与支持问题",
  "PAGE-SPECIFIC FAQ":"本页常见问题", "Questions worth answering early.":"值得提前了解的问题。", "WHAT YOU GAIN":"您将获得什么", "READY TO MOVE FORWARD?":"准备好开始了吗？",
  "A stronger operating foundation":"更坚实的运营基础", "A process designed to reduce uncertainty":"减少不确定性的清晰流程", "Confidence at every decision point":"在每个决策节点都更有信心",
  "Get useful answers without a long sales process":"无需漫长销售流程即可获得有效答案", "Talk to a specialist":"联系专业顾问",
  "The outcome is not simply a technical connection — it is a workflow your team can understand and use.":"最终成果不仅是技术连接，更是一套团队能够理解并持续使用的工作流程。",
  "Less":"更少", "Clearer":"更清晰", "Faster":"更高效", "Manual coordination":"人工协调", "Operational ownership":"运营责任", "Daily processing":"日常处理",
  "Reduce repeated handoffs and unclear order-processing responsibilities.":"减少重复交接，明确订单处理责任。",
  "Give your team a shared understanding of where each task belongs.":"让团队清楚了解每项任务应在哪个系统、由谁完成。",
  "Create a more direct path from customer order to ERP handling.":"建立从客户订单到 ERP 处理的更直接流程。",
  "Let’s identify the right service scope for your Shopify store.":"让我们为您的 Shopify 店铺确定合适的服务范围。",
  "Let’s identify the right service scope for your Shopify store.":"让我们为您的 Shopify 店铺确定合适的服务范围。",
  "Everything needed to move from disconnected tasks to a structured workflow.":"从分散任务迈向结构化工作流所需的一切。",
  "Choose focused support for your current stage, whether you are evaluating Mabang ERP or preparing an active Shopify store for connection.":"无论您正在评估马帮 ERP，还是准备为运营中的 Shopify 店铺进行接入，我们都能提供适合当前阶段的针对性支持。",
  "Store Assessment":"店铺评估", "Workflow Planning":"工作流规划", "ERP Connection Support":"ERP 接入支持", "Post-connection Guidance":"接入后指导",
  "Review Shopify setup, order profile, product structure and current operational pain points.":"检查 Shopify 设置、订单情况、商品结构以及当前运营痛点。",
  "Define how products, orders, inventory and fulfilment responsibilities should move between systems.":"明确商品、订单、库存和履约责任应如何在不同系统间流转。",
  "Coordinate the Mabang ERP binding process with clear checkpoints and human guidance.":"通过清晰的检查节点和人工指导，协助完成马帮 ERP 绑定流程。",
  "Help your team understand the new flow and clarify issues discovered after connection.":"帮助团队理解新流程，并处理接入后发现的问题。",
  "A service scope that matches your real operation.":"与实际运营相匹配的服务范围。",
  "We do not force every merchant into the same setup. The right workflow depends on order volume, markets, fulfilment model and team responsibilities.":"我们不会让所有商家套用同一种配置。合适的工作流取决于订单量、销售市场、履约模式和团队职责。",
  "Shopify-first discovery":"从 Shopify 业务出发", "Clear system boundaries":"清晰的系统边界", "Implementation visibility":"透明的实施过程",
  "Start with the storefront and operational reality your team already manages.":"从您的店铺现状和团队实际运营方式开始评估。",
  "Know what will be handled in Shopify, Mabang ERP and through human follow-up.":"明确哪些工作在 Shopify、马帮 ERP 和人工跟进中完成。",
  "Understand each checkpoint, owner and next action before work moves forward.":"推进前明确每个检查节点、负责人和下一步行动。",
  "Know what the engagement covers before it begins.":"开始之前，清楚了解服务包含什么。",
  "A useful integration service starts with a clear fit and finishes with tangible outputs your team can continue using.":"有效的集成服务始于明确匹配，最终交付团队可以持续使用的实际成果。",
  "Growing Shopify merchants":"成长中的 Shopify 商家", "Teams evaluating Mabang ERP":"正在评估马帮 ERP 的团队", "Stores replacing fragmented tools":"希望替换分散工具的店铺", "Cross-border fulfilment teams":"跨境履约团队",
  "Readiness summary":"准备度总结", "Workflow outline":"工作流概要", "Connection checklist":"接入检查清单", "Follow-up notes":"后续跟进记录",
  "Can I purchase only the assessment?":"可以只购买评估服务吗？", "Does this include custom software development?":"是否包含定制软件开发？", "Will you operate Mabang ERP for my team?":"你们会替我们操作马帮 ERP 吗？",
  "Every step produces a clear output and a clear next action.":"每个阶段都有明确成果和下一步行动。",
  "One point of contact":"统一联系人", "Visible stages":"清晰可见的阶段", "Human follow-up":"人工跟进",
  "The service is designed to help you move forward with fewer assumptions.":"这项服务旨在减少假设，让您更有把握地推进。",
  "Fast":"快速", "Clear":"清晰", "Real":"真实", "Initial response":"首次响应", "Recommendations":"建议方案", "Specialist support":"专业顾问支持",
  "Start with the information you need to decide whether a deeper conversation makes sense.":"先获得必要信息，再决定是否需要进一步沟通。",
  "Target first response":"首次响应目标", "Relevant discussion":"针对性沟通", "Unnecessary complexity":"不必要的复杂度",
  "Start with a short store assessment and a clear next step.":"从简短的店铺评估和明确的下一步开始。",
  "Work with a team that understands both systems and operations.":"与同时理解系统和运营的团队合作。",
  "Still have a question? Send us your store context.":"还有疑问？请把您的店铺情况告诉我们。",
  "Company":"公司", "Product":"产品", "Support":"支持", "Privacy Policy":"隐私政策", "Terms & Conditions":"条款与条件"
};

const translatedNodes = new WeakSet();
const protectedTerms = /^(Shopify|Mabang|ERP|FlowBridge|LIVE|EN|WhatsApp|[\d.,+:%–—-]+)$/i;

async function autoTranslate(text) {
  const cacheKey = `fb_zh_${text}`;
  const cached = sessionStorage.getItem(cacheKey);
  if (cached) return cached;
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (!response.ok) return text;
    const data = await response.json();
    const result = data[0].map((part) => part[0]).join("");
    sessionStorage.setItem(cacheKey, result);
    return result;
  } catch {
    return text;
  }
}

function translatePage() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (node.parentElement?.closest("script,style")) return;
    const raw = node.nodeValue;
    const trimmed = raw.trim();
    if (translations[trimmed]) {
      node.nodeValue = raw.replace(trimmed, translations[trimmed]);
      translatedNodes.add(node);
      return;
    }
    if (!translatedNodes.has(node) && /[A-Za-z]{3}/.test(trimmed) && !protectedTerms.test(trimmed)) {
      translatedNodes.add(node);
      autoTranslate(trimmed).then((result) => {
        if (node.isConnected && result !== trimmed) node.nodeValue = raw.replace(trimmed, result);
      });
    }
  });
  document.documentElement.lang = "zh-CN";
}

export default function ChineseTranslator() {
  useEffect(() => {
    translatePage();
    const observer = new MutationObserver(translatePage);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
  return null;
}
