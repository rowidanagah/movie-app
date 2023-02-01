{/* <nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
</nav> */}


function Pagination(probs) {

    const pars = useSearchParams();
    console.log(pars)

    const curs = ["prev", 1, 2, 3, 4, "next"]
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                {curs.map((lst) => {
                    return
                     <li key={lst} class="page-item">
                        <a class="page-link" href="#"
                        onClick={() => setHistory(page : lst)}>{lst}</a>
                        </li>

                })}

            </ul>
        </nav>
    )

}

export default Pagination;