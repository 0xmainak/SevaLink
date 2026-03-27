"use server"

const submissions: any[] = [];

function generateSmartSummary(type: string, data: any) {
  if (type === "patient") {
    return `Patient ${data.name} from ${data.location} requesting ${data.urgency} support: ${data.need.substring(0, 50)}...`;
  } else if (type === "volunteer") {
    return `New volunteer ${data.name} from ${data.location} with skills in ${data.skills}.`;
  } else {
    return `Contact message from ${data.name}.`;
  }
}

export async function submitFormAction(type: "patient" | "volunteer" | "contact", formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  // Basic validation (simulate network delay)
  await new Promise(resolve => setTimeout(resolve, 800));

  const summary = generateSmartSummary(type, data);
  const record = { id: Date.now(), type, data, summary, createdAt: new Date().toISOString() };
  
  submissions.push(record);
  console.log("New Submission:", record);

  return { success: true, summary };
}
