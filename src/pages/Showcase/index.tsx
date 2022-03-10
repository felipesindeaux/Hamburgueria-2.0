import { getProductsThunk } from "../../store/modules/products/thunk"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const Showcase = () => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    return (
        <>
    <h1>Showcase</h1>
    <button onClick={() => dispatch(getProductsThunk())}>get</button>
    </>
    )
}

export default Showcase