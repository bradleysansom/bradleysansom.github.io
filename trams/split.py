import json
import geojson

def split_geojson(input_file, output_prefix):
    # Read the input GeoJSON file
    with open(input_file, 'r') as f:
        data = geojson.load(f)

    # Check if the data is a valid FeatureCollection
    if 'features' not in data:
        raise ValueError("Invalid GeoJSON file: 'features' key not found")

    # Iterate over each feature in the FeatureCollection
    for i, feature in enumerate(data['features']):
        # Check if the feature has the 'ste_code' property
        if 'properties' not in feature or 'name' not in feature['properties']:
            raise ValueError(f"Feature {i} does not contain 'ste_code' property")

        # Extract the 'ste_code' value
        name = feature['properties']['name']
        
        # Create a new FeatureCollection for each feature
        new_feature_collection = geojson.FeatureCollection([feature])
        
        # Define the output file name
        output_file = f"{output_prefix}_{name}.geojson"
        
        # Write the new FeatureCollection to a separate file
        with open(output_file, 'w') as f:
            geojson.dump(new_feature_collection, f)

        print(f"Feature {i} with name {name} written to {output_file}")

