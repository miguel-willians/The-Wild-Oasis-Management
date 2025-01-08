import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <CreateCabinForm onCloseModal={() => setOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
