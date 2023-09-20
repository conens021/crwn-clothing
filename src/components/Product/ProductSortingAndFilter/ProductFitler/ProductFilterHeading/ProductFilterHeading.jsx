function ProductFilterHeading({ closeModal = () => { } }) {
    return (
        <div>
            <h2 onClick={closeModal}>Close</h2>
        </div>
    );
}

export default ProductFilterHeading;