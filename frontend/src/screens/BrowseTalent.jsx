import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const BrowseTalent = () => {
  const [availableCandidates, setAvailableCandidates] = useState([
    { name: "Rishab", skills: "Front-End Dev" },
    { name: "Shreyans", skills: "Front-End Dev" },
    { name: "Varun", skills: "Front-End Dev" },
    { name: "Ritnonjan", skills: "Front-End Dev" },
  ]);
  return (
    <div style={{ backgroundColor: "#f3f4f6", paddingBottom: "2rem" }}>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          Browse Talent
        </div>
        <div>
          <Button
            variant="outline"
            style={{
              fontSize: "0.7rem",
              padding: "0.5rem",
              paddingTop: "0",
              paddingBottom: "0",
            }}
            color="#2234da"
          >
            Meeting in 15 mins
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CiSearch />
          </InputLeftElement>
          <Input
            type="tel"
            style={{ backgroundColor: "white", fontSize: "0.7rem" }}
            placeholder="Search by name or keyword"
          />
        </InputGroup>
        <Select
          placeholder="Job Roles:"
          style={{ backgroundColor: "white", fontSize: "0.7rem" }}
        >
          <option value="option1">Job Roles: All</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select
          placeholder="Price Per Hour:"
          style={{ backgroundColor: "white", fontSize: "0.7rem" }}
        >
          <option value="option1">Price Per Hour: $0 - $100</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Select
          placeholder="More Filters"
          style={{
            backgroundColor: "white",
            fontSize: "0.7rem",
            color: "#ff5045",
          }}
        >
          <option value="option1">Price Per Hour: $0 - $100</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <hr />
      <div style={{ display: "flex" }}>
        <div>
          {availableCandidates?.map((candidate) => {
            return (
              <div style={{ padding: "1rem", paddingBottom: "0" }}>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  boxShadow="xl"
                  transition="transform 0.2s" // Add a smooth transition effect
                  _hover={{ transform: "scale(1.02)" }}
                  variant="outline"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                  />
                  <Stack>
                    <CardBody style={{ textAlign: "left" }}>
                      <Heading size="md">{candidate?.name}</Heading>
                      <Text py="2">
                        Caffè latte is a coffee beverage of Italian origin made
                        with espresso and steamed milk.
                      </Text>
                      <Text pb="2">Speaks: English, Hindi</Text>
                      <Text pb="2">Skills: {candidate?.skills}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button variant="outline" color="#ff5045">
                        Invite To Job
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              </div>
            );
          })}
        </div>
        <div style={{ paddingTop: "1rem", paddingRight: "1rem" }}>
          <Card
            maxW="sm"
            boxShadow="xl"
            transition="transform 0.2s" // Add a smooth transition effect
            _hover={{ transform: "scale(1.05)" }}
          >
            <CardBody>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">References</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces, earthy toned spaces and for people who love a
                  chic design with a sprinkle of vintage design.
                </Text>
                {/* <Text color="blue.600" fontSize="2xl">
                  $450
                </Text> */}
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                variant="outline"
                style={{ width: "100%" }}
                color="#ff5045"
              >
                View Full Profile
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BrowseTalent;
