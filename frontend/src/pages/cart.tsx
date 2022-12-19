import Image from "next/image";
import React from "react";
import banner from "../asset/banner.png";
import { MdOutlineClear } from "react-icons/md";

export default function Cart() {
  return (
    <div className="cart_page_wrapper">
      <div className="row px-2 px-md-5">
        <div className="col-12 col-md-6 col-xl-8">
          <p className="h2 fw-bold dark_blue">Shopping Cart (3 items) </p>

          <div className="row">
            <div className=" col-lg-6 co-xl-4">
              <div className=" p-0 card rounded-1 overflow-hidden mt-5">
                <div className="cart_image_div">
                  <Image
                    className=""
                    src={banner}
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </div>

                <div className="cart_desc px-3 pb-3">
                  <div className="d-flex justify-content-end mt-2 ">
                    <MdOutlineClear
                      type="button"
                      className="cp dark_blue"
                      size={32}
                    />
                  </div>
                  <h4 className="h4 dark_blue">Product Name</h4>
                  <h4 className="h4 dark_blue">Price : 1000 /-</h4>
                  <h4 className="h5 dark_blue">Quantity</h4>
                  <h4 className="h6 dark_blue">Size : </h4>
                  <h4 className="h6 dark_blue">Color : </h4>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 co-xl-4">
              <div className="p-0 card rounded-1 overflow-hidden mt-5">
                <div className="cart_image_div">
                  <Image
                    className=""
                    src={banner}
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </div>

                <div className="cart_desc px-3 pb-3">
                  <div className="d-flex justify-content-end mt-2 ">
                    <MdOutlineClear
                      type="button"
                      className="cp dark_blue"
                      size={32}
                    />
                  </div>
                  <h4 className="h4 dark_blue">Product Name</h4>
                  <h4 className="h4 dark_blue">Price : 1000 /-</h4>
                  <h4 className="h5 dark_blue">Quantity</h4>
                  <h4 className="h6 dark_blue">Size : </h4>
                  <h4 className="h6 dark_blue">Color : </h4>
                </div>
              </div>
            </div>

            <div className=" col-lg-6 co-xl-4">
              <div className=" p-0 card rounded-1 overflow-hidden mt-5">
                <div className="cart_image_div">
                  <Image
                    className=""
                    src={banner}
                    objectFit="cover"
                    layout="fill"
                    alt=""
                  />
                </div>

                <div className="cart_desc px-3 pb-3">
                  <div className="d-flex justify-content-end mt-2 ">
                    <MdOutlineClear
                      type="button"
                      className="cp dark_blue"
                      size={32}
                    />
                  </div>
                  <h4 className="h4 dark_blue">Product Name</h4>
                  <h4 className="h4 dark_blue">Price : 1000 /-</h4>
                  <h4 className="h5 dark_blue">Quantity</h4>
                  <h4 className="h6 dark_blue">Size : </h4>
                  <h4 className="h6 dark_blue">Color : </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------ */}
        <div className="col-12   col-md-6 col-xl-4 mt-5 com-md-0   ">
          <div className="px-4 cart_payment_info py-5 rounded-3">
            <h1 className="fw-bold dark_blue h1">Payment Info</h1>
            <h5 className="h5 dark_blue mb-3">Choose your payemet option</h5>
            <div className="form-check mb-2">
              <input
                className="form-check-input select_color_input_custom "
                type="radio"
                name="flexRadioDefault"
                id="credit"
              />
              <label
                className="form-check-label select_size_input_custom_label dark_blue"
                htmlFor="credit">
                Credit Card
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input  select_color_input_custom"
                type="radio"
                name="flexRadioDefault"
                id="eSewa"
              />
              <label
                className="form-check-label select_size_input_custom_label dark_blue"
                htmlFor="eSewa">
                e-Sewa
              </label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input select_color_input_custom"
                type="radio"
                name="flexRadioDefault"
                id="cash"
              />
              <label
                className="form-check-label select_size_input_custom_label dark_blue"
                htmlFor="cash">
                Cash On Delivery
              </label>
            </div>

            <h5 className="h5 mt-4 dark_blue mb-3">Your Payment Details</h5>
            <input
              className="form-control form-control-lg rounded-1 py-3 mb-4 checkout_input"
              type="text"
              placeholder="Full Name"
            />

            <input
              className="form-control form-control-lg rounded-1 py-3 mb-4 checkout_input"
              type="text"
              placeholder="Card Number"
            />

            <div className="row">
              <div className="col">
                <input
                  className="form-control form-control-lg rounded-1 py-3 mb-4 checkout_input"
                  type="text"
                  placeholder="Exp Date"
                />
              </div>
              <div className="col">
                <input
                  className="form-control form-control-lg rounded-1 py-3 mb-4 checkout_input"
                  type="text"
                  placeholder="CVV"
                />
              </div>
            </div>
            <button
              type="button"
              className="btn login_button btn-lg w-100 rounded-1">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}