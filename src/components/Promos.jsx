import React from "react";
import "./Promos.css";
import PromoItem from "./PromoItem/PromoItem";

const Promos = () => {
  return (
    <div className="promos">
      <div className="promo-header">PROMOS</div>

      <div className="promo-content">
        <PromoItem
          backgroundColor="green"
          image="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          header="Male"
          name="Findout about our male sale"
          priceText="Only R599"
        />

        <PromoItem
          backgroundColor="#800070"
          image="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          header="Female"
          name="Female Special!!!"
          priceText="yeah R999"
        />

<PromoItem
          backgroundColor="red"
          image="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          header="Back To School"
          name="School furniture special"
          priceText="yeah R999"
        />
      </div>
    </div>
  );
};

export default Promos;
