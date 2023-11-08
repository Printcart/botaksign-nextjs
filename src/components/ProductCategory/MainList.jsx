'use client';
import Refine from './Refine';
import Listing from './Listing';

const MainList = (props) => {
  const { currentId, display, dataTopBar, dataRefine, dataCategory } = props;

  return (
    <div className="d-flex">
      {dataRefine &&
        <Refine
          dataTopBar={dataTopBar}
          dataRefine={dataRefine}
        />
      }
      <Listing
        currentId={currentId}
        display={display}
        dataTopBar={dataTopBar}
        dataCategory={dataCategory}
      />
    </div>
  );
};

export default MainList;
