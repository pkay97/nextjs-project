import StoreProvider from "../../app/StoreProvider";
import Counter from "@/components/counter";


export default function ContactUs(){
    return(
        <StoreProvider>
    <Counter />
    </StoreProvider>
    )
}