import * as yup from "yup"

export const tipsSchema = yup.object({
    title: yup.string().required("Title is required"),
    topContent: yup.string().required("Top content is required"),
    code: yup.string().required("Code is required"),
    bottomContent: yup.string().required("Bottom content is required"),
    language: yup.string().required("Language is required"),
    level: yup.string().required("Level is required"),
})