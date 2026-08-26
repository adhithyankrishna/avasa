import { getCallbackRequests, getEnquiries } from "@/lib/db";

export async function GET() {
  try {
    return Response.json({
      callback_requests: getCallbackRequests(),
      enquiries: getEnquiries()
    });
  } catch (error: any) {
    return Response.json(
      { error: "Failed to fetch test data: " + error.message },
      { status: 500 }
    );
  }
}
