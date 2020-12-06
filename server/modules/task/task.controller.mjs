import log from '@ajar/marker';
import task_model from "./task.model.mjs";

// post - /api/tasks/
export const create_task = async (req, res) => {
    log.obj(req.body, "create a task, req.body:");
    let task = await task_model.create(req.body);

    res.status(200).json(task);
}

// get - /api/tasks/
export const get_all_tasks = async (req, res) => {
    const tasks = await task_model.find();//.populate('participants')
    res.status(200).json(tasks);
}

// patch - /api/tasks/change/:id
export const update_task = async (req, res) => {
    const [task] = await task_model.find({appId: req.params.id});
    task.completed = req.body.completed;
    await task.save();
    res.status(200).send(task);
}
// patch all - /api/tasks/change/:id
export const update__all_task = async (req, res) => {
    req.body.forEach(async task => {
        const [to_change] = await task_model.find({appId: task.appId});
        console.log(to_change);
        to_change.completed = !to_change.completed;
        await to_change.save();
    });
    res.status(200).send(req.body);
}
// delete - /api/tasks/clear/:id
export const delete_task = async (req, res) => {
    const [task] = await task_model.find({appId: req.params.id}); 
    const removed_task = await task.remove();
    res.status(200).json(removed_task);
}

// delete all tasks - /api/tasks/all
export const delete_all_tasks = async (req, res) => {
    req.body.forEach(async task => {
        const [to_clear] = await task_model.find({appId: task.appId});
        await to_clear.remove();
    });
    res.status(200).json(req.body);
}