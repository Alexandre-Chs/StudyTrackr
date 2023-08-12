import React from "react";

const AddTask = () => {
  return (
    <div className="text-orange-600 w-[400px]">
      <form action="/api/add-task" method="post">
        <div>
          <label htmlFor="priority">Priority</label>
          <input name="priority" type="text" placeholder="priority" />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input name="status" type="text" placeholder="status" />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input name="title" type="text" placeholder="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input name="description" type="text" placeholder="Description" />
        </div>
        <div>
          <label htmlFor="schoolSubject">SchoolSubject</label>
          <input name="schoolSubject" type="text" placeholder="SchoolSubject" />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input name="date" type="date" className="text-black" />
        </div>
        <button className="p-4 bg-gray-500">Submit task</button>
      </form>
    </div>
  );
};

export default AddTask;
