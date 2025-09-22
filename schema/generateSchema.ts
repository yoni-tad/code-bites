import * as yup from "yup";

export const GenerateSchema = yup.object({
  language: yup.string().required("Language is required"),
  level: yup.string().required("Level is required"),
});
