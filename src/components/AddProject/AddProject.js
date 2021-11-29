import React from "react";
import { useForm } from "react-hook-form";


const AddProject = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://secret-everglades-79957.herokuapp.com/AddProject", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div>
      <div>
        <h1 className="mt-5 text-center text-danger">Please Add Services</h1>
        <div className=" w-25 m-auto mt-5">
          <div className=" ">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("description")}
                  placeholder="Description"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("live", { required: true })}
                  placeholder="Live Link"
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("client", { required: true })}
                  placeholder="ClientSite Link"
                  className="p-2 m-2 w-100 input-field"
                />
                <input
                  {...register("server", { required: true })}
                  placeholder="ServerSite Link"
                  className="p-2 m-2 w-100 input-field"
                />

                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="btn btn-info w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
