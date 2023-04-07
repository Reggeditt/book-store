const AddBook = () => {
  return (
    <form className="add-book-form">
      <input type="text" placeholder="Book title" />
      <select>
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Fiction">Fiction</option>
        <option value="Romance">Romance</option>
      </select>
    </form>
  )
}