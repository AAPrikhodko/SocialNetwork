import React, {useState} from "react";


import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Paginator(props) {
    const classes = useStyles();

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    return (
        <div className={classes.root}>
            <Pagination
                variant="outlined"
                shape="rounded"
                count={pagesCount}
                onChange={props.onPageChanged}
            />
        </div>
    );
}

/*


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return <div>
        { portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button> }

       {
            pages
                .filter(p => p>= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                return <span className={currentPage === p && styles.selectedPage}
                             key={p}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })
        }

        {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber+1)}}>NEXT</button>}


    </div>

}
*/


