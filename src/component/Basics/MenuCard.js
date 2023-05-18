import React from "react";

const MenuCard = ({ menuData }) => {

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image,Height , description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                  <img src={image} alt="images" className="card-media" />
                    <span className="card-author subtle"> {category}</span>
                    <h4 className="card-title"> {name} </h4>
                    <h6>{Height}</h6>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <details className="card-read">
                    
                    </details>
                    <summary>Want to know more ?
                      <div> read more</div>
                    </summary>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;