import useModalDOM from "helper/hooks/useModalDOM"
import useScrollAnchor from "helper/hooks/useScrollAnchor"
import useScrollToTop from "helper/hooks/useScrollToTop";

export default function Document({children}) {
    useScrollAnchor();
    useModalDOM();
    useScrollToTop();
    
    return children
}