import { Component } from "react";

import { IoCashOutline } from "react-icons/io5";

import { Modal } from "../Modal";
import { Timer } from "../Timer/Timer";

import { BannerItem } from "./BannerItem";
import { BannerModal } from "./BannerModal";

const TEXT =
  "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.";

export class Banner extends Component {
  state = {
    isOpenModal: false,
    counter: 0,
    text: this.props.test,
  };

  handleOpenModal = () => {
    this.setState({ isOpenModal: true, counter: this.state.counter + 1 });
  };

  handleCloseModal = () => {
    this.setState({ isOpenModal: false });
  };

  handleToggleModal = () => {
    this.setState((prevState) => {
      return { isOpenModal: !prevState.isOpenModal };
    });
  };

  render() {
    return (
      <>
        <div className="row mb-5 p-5 row-cols-2 bg-light">
          <BannerItem
            title="Featured title"
            text={TEXT}
            onOpenModal={this.handleOpenModal}
          >
            <IoCashOutline />
          </BannerItem>
        </div>
        {this.state.isOpenModal && (
          <Modal onCloseModal={this.handleToggleModal}>
            <Timer />
          </Modal>
        )}
      </>
    );
  }
}

// export const Banner = () => {
//   return (
//     <>
//       <div className="row mb-5 p-5 row-cols-2 bg-light">
//         <BannerItem title="Featured title" text={TEXT}>
//           <IoCashOutline />
//         </BannerItem>
//       </div>

//       {isModalOpen && (
//         <Modal>
//           <BannerModal />
//         </Modal>
//       )}
//     </>
//   );
// };
