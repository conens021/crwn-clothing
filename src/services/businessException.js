import { toast } from "react-toastify";

const handleClient = (ex) => {
    if (isClientError(ex)) {
        alert('client error')
        toast.error(`Client error: ${ex.response.statusText}`);
    }
};

const isClientError = (ex) =>
    ex && ex.response && ex.response.status >= 400 && ex.response.status < 500;

const isExpectedError = (ex) => ex && ex.response;

const isServerError = (ex) => ex && ex.response && ex.response.status >= 500;

const isAnauthorized = (ex) => ex && ex.response && ex.response.status === 403;

export {
    isClientError,
    isExpectedError,
    isServerError,
    isAnauthorized,
    handleClient
};
