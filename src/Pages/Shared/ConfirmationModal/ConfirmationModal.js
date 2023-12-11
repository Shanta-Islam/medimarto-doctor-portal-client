import { Button, Modal } from 'flowbite-react';
import React from 'react';

const ConfirmationModal = ({ show, close, title, message, successButtonName, deletingDoctor, successAction }) => {

    return (
        <>
            <Modal
                show={show}
                size="md"
                popup={true}
                onClose={close}
            >
                <Modal.Header className='border-2 border-b-0 rounded-t-lg'>Deletion Confimation</Modal.Header>
                <Modal.Body className='border-2 border-t-0 rounded-b-lg'>
                    <div className='text-center'>
                        <h3 className='text-lg font-bold'>{title}</h3>
                        <p>{message}</p>
                    </div>
                    <div className='flex mt-4 justify-end'>
                        <Button onClick={close} className='me-2 border border-primary text-black'>
                            Cancel
                        </Button>
                        <Button type="submit" className='bg-primary' onClick={()=>{successAction(deletingDoctor)}}>
                            {successButtonName}
                        </Button>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ConfirmationModal;