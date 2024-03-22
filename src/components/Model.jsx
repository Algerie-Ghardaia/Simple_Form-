export default function Model({ isVisible,setShowModal,errorMessage  }) {
  if (isVisible) {
    return (
      <>
        <div
          className="colorModel"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <div className="model">
            <div className="model-content">
              <div style={{color:errorMessage ?"red" : "green"}}> {errorMessage !== null ? errorMessage : "The Form Has Been Submitted Successfully"}</div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
