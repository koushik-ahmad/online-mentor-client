import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Online Mentor`;
    }, [title])
};

export default useTitle;
