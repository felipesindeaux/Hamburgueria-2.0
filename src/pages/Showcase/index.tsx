import { getProductsThunk } from "../../store/modules/products/thunks"
import { useDispatch } from "react-redux"

const Showcase = () => {

    const dispatch = useDispatch()

    return (
        <>
    <h1>Showcase</h1>
    <button onClick={() => dispatch(getProductsThunk())}>get</button>
    </>
    )
}

export default Showcase