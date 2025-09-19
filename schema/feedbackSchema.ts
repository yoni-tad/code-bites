import * as yup from "yup";

export const FeedbackSchema = yup.object({
  user_id: yup.string().required("User id is required"),
  tip_id: yup.string().required("Tip id is required"),
  reaction: yup.string().required("Reaction is required"),
  reason: yup.string(),
});
