import { useState } from "react";

const useFormData = () => {
    const [formData, setFormData] = useState<{}>({});

    return { formData, setFormData };
};

export default useFormData;
