import React, { useState } from "react";
import {
  Avatar,
  Card,
  TextField,
  Button,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../features/usersSlice";
import { Section } from "react-materialize";

const Users = () => {
  const [newName, setNewName] = useState("");
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  return (
    <Section>
      <div className="flex flex-col gap-5">
        {userList.map((user) => (
          <Card variant="outlined" sx={{ maxWidth: 1000 }} key={user.id}>
            <div className=" col-span-4 flex flex-row justify-start items-center gap-8 pl-12">
              <Avatar
                alt=""
                src="/static/images/avatar/1.jpg"
                sx={{ width: 65, height: 65 }}
              />
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    email : {user.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    phone number : {user.phone}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
                    user program : {user.program}
                  </Typography> */}
                  <Typography variant="body2" color="text.secondary">
                    message : {user.message}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </div>
            <div className=" col-span-7 flex flex-row justify-center items-center px-12 gap-12 pr-1">
              <TextField 
                fullWidth
                label="type new name"
                variant="standard"
                onChange={(e) => setNewName(e.target.value)}
              />
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(updateUser({ id: user.id, name: newName }));
                }}
              >
                Update
              </Button>
              <Button aria-label="delete" color="error"
                variant="contained"
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete
              </Button>
            </div>
            {/* <div className=" col-span-1 flex flex-row justify-center items-center pr-2">
              
            </div> */}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Users;
