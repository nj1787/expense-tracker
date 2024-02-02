function NewTransaction() {
  return (
    <>
      <h2 className="text-lg font-medium my-5 mx-3">Add New Transaction</h2>
      <div className="w-full md:w-1/3">
        <label
          className="text-sm font-medium mx-5 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent mx-5 my-2 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Enter your name"
          id="name"
        />
      </div>
    </>
  );
}

export default NewTransaction;
