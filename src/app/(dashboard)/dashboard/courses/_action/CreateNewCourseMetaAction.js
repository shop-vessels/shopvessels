"use server"
async function CreateNewCourseMetaAction(formData) {
    console.log(formData.get("thumbnail"));

    return true

}

export default CreateNewCourseMetaAction