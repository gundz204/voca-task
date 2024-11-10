import { Container, Box, Input, Button, Text, Stack } from "@chakra-ui/react";
import { Avatar } from "../components/ui/avatar";
import { Icon } from "@chakra-ui/react";
import { MdEdit } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { useState } from "react";

const Task = () => {
  const [task, setTask] = useState(""); // state for new task
  const [taskList, setTaskList] = useState([]); // state for task list
  const [completedTasks, setCompletedTasks] = useState([]); // state for completed tasks
  const [isEditing, setIsEditing] = useState(false); // state to track if we're editing a task
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null); // state to track which task is being edited

  const addTask = () => {
    if (task) {
      setTaskList([...taskList, task]);
      setTask(""); // clear input after adding task
    }
  };

  const completeTask = (task) => {
    setCompletedTasks([...completedTasks, task]);
    setTaskList(taskList.filter(t => t !== task)); // Remove from task list
  };

  const editTask = () => {
    if (task && currentTaskIndex !== null) {
      const updatedTaskList = [...taskList];
      updatedTaskList[currentTaskIndex] = task;
      setTaskList(updatedTaskList);
      setTask(""); // clear input after editing task
      setIsEditing(false); // reset editing state
      setCurrentTaskIndex(null); // reset task index
    }
  };

  const startEditing = (task, index) => {
    setTask(task); // Set the task to be edited in the input
    setIsEditing(true); // Enable editing mode
    setCurrentTaskIndex(index); // Set the index of the task to edit
  };

  return (
    <Container
      display="flex"
      bg="gray.900"
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      p={0}
    >
      <Container
        bg="gray.900"
        display="flex"
        gap={6}
        color="white"
        py={8}
        maxW="container.xl"
        flexDirection={["column", "row"]} // Stack vertically on mobile, row on desktop
        justifyContent={["center", "center"]} // Center items on mobile, center on desktop
        alignItems={["center", "start"]} // Center items on mobile, start on desktop
      >
        {/* Sidebar Kiri */}
        <Box
          maxW="sm"
          p={6}
          bg="gray.800"
          borderRadius="lg"
          boxShadow="lg"
          height={["50vh", "55vh"]}
          width={["50vh", "55v"]}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={4}
          flexBasis={["50vh"]}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar
              size="2xl"
              name="Panji Gunawan"
              src="https://bit.ly/sage-adebayo"
              mb={4}
            />
          </Box>
          <Box display="flex" gap={2} mb={4} justifyContent="center" alignItems="center">
            <Text>Welcome Back,</Text>
            <Text fontWeight="bold">Panji</Text>
          </Box>
          <Button bg="blackAlpha.400" minW={["15vh", "20vh"]}>
            <Icon fontSize="md" color="white">
              <MdEdit />
            </Icon>
            <Text fontWeight="Medium">Edit Profile</Text>
          </Button>

          <Button bg="red.600" minW={["15vh", "20vh"]}>
            <Icon fontSize="md" color="white">
              <GoSignOut />
            </Icon>
            <Text fontWeight="Medium">Sign Out</Text>
          </Button>
        </Box>

        {/* Konten Utama */}
        <Box
          maxW="xl"
          p={6}
          bg="gray.800"
          borderRadius="lg"
          boxShadow="lg"
          height={["50vh", "70vh"]}
          display="flex"
          flexDirection="column"
          justifyContent="start"
          gap={4}
          flex="3"
          width={["50vh", "55v"]}
        >
          {/* Add Task Section */}
          <Box>
            <Text fontWeight="bold" mb={2}>Add New Task</Text>
            <Input
              placeholder="Enter new task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              mb={4}
              bg="gray.700"
              color="white"
            />
            <Button
              colorScheme="blue"
              onClick={isEditing ? editTask : addTask} // Use editTask if editing
              width="full"
            >
              {isEditing ? "Save Task" : "Add Task"}
            </Button>
          </Box>

          {/* Task List Section */}
          <Box mt={6}>
            <Text fontWeight="bold" mb={2}>Task List</Text>
            {taskList.length === 0 ? (
              <Text>No tasks available</Text>
            ) : (
              <Stack spacing={3}>
                {taskList.map((task, index) => (
                  <Box
                    key={index}
                    bg="gray.700"
                    p={3}
                    borderRadius="md"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Text>{task}</Text>
                    <Box>
                      <Button
                        colorScheme="green"
                        size="sm"
                        onClick={() => completeTask(task)}
                      >
                        Complete
                      </Button>
                      <Button
                        colorScheme="yellow"
                        size="sm"
                        onClick={() => startEditing(task, index)} // Start editing
                        ml={2}
                      >
                        Edit
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Stack>
            )}
          </Box>

          {/* Completed Tasks Section */}
          <Box mt={6}>
            <Text fontWeight="bold" mb={2}>Completed Tasks</Text>
            {completedTasks.length === 0 ? (
              <Text>No completed tasks</Text>
            ) : (
              <Stack spacing={3}>
                {completedTasks.map((task, index) => (
                  <Box
                    key={index}
                    bg="gray.700"
                    p={3}
                    borderRadius="md"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Text>{task}</Text>
                  </Box>
                ))}
              </Stack>
            )}
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default Task;
