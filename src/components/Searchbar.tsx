
const Searchbar = () => {
  return (
    <div className="searchbar">
        <div className="searchbar-search">
            <input className="searchbar-input" placeholder="Search recipes..." type="text" />
        </div>
        <button className="searchbar-btn">Search</button>
    </div>
  )
}

export default Searchbar