import axios from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const BASE_URL = "https://www.course-api.com/cocktails-newsletter";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const res = await axios.post(BASE_URL, data);
    toast.success(res.data.msg);
    return redirect("/");
  } catch (error) {
    if (error.status === 400) {
      toast.error("Please provide valid values");
    } else toast.error("Internal Error, please try again later");
    return null;
  }
}
