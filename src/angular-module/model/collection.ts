/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Collection { 
    /**
     * Checks whether the collection is empty (contains no elements).
     */
    readonly empty?: boolean;
    /**
     * Gets all keys/indices of the collection.
     */
    readonly keys?: Array<number>;
    /**
     * Gets all values of the collection.
     */
    readonly values?: Array<string>;
    readonly iterator?: any | null;
}
