const mongoose = require("mongoose");

const { Schema, model, Types } = mongoose;

const UserSchema = new Schema(
    {
        authId: {
            type: Types.ObjectId,
            required: true,
            ref: "Auth",
        },
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        profile_image: {
            type: String,
        },
        contact: {
            type: String,
            required: [true, "Contact number is required"],
            validate: {
                validator: (value) => validator.isMobilePhone(value, "any"),
                message: "Please provide a valid contact number",
            },
        },
        gender: {
            type: String,
            enum: ["MALE", "FEMALE", "OTHER"],
            default: "MALE",
            required: true,
        },
        nSiren: {
            type: Number,
            required: [true, "SIREN number is required"],
        },
        address: {
            street_no: {
                type: String,
                required: [true, "Street number is required"],
            },
            street_name: {
                type: String,
                required: [true, "Street name is required"],
            },
            city: {
                type: String,
                required: [true, "City is required"],
            },
            postal_code: {
                type: String,
                required: [true, "Postal code is required"],
                validate: {
                    validator: (value) => validator.isPostalCode(value, 'any'), // Assuming French postal code
                    message: "Please provide a valid postal code",
                },
            },
            country: {
                type: String,
                required: [true, "Country is required"],
                default: 'France'
            }
        },
    },
    {
        timestamps: true,
    }
);

const User = model("User", UserSchema);

module.exports = User;
