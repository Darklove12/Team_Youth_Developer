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
          image="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          header="Female Formal Shoes"
          name="Shoes special"
          priceText="yeah R999"
        />
<PromoItem
          backgroundColor="pink"
          image="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          header="Watch Unique"
          name="Female + Male Special!!!"
          priceText="woooooow R2999"
        />




      </div>
    </div>

  );
};

export default Promos;
