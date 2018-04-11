import TaskStep from '../models/taskStep';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all taskTaskSteps
 * @param req
 * @param res
 * @returns void
 */
export function getTaskSteps(req, res) {
  TaskStep.find().sort('-dateAdded').exec((err, taskTaskSteps) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ taskTaskSteps });
  });
}

/**
 * Save a taskTaskStep
 * @param req
 * @param res
 * @returns void
 */
export function addTaskStep(req, res) {
  if (!req.body.taskTaskStep.name || !req.body.taskTaskStep.title || !req.body.taskTaskStep.content) {
    res.status(403).end();
  }

  const newTaskStep = new TaskStep(req.body.taskTaskStep);

  // Let's sanitize inputs
  newTaskStep.title = sanitizeHtml(newTaskStep.title);
  newTaskStep.name = sanitizeHtml(newTaskStep.name);
  newTaskStep.content = sanitizeHtml(newTaskStep.content);

  newTaskStep.slug = slug(newTaskStep.title.toLowerCase(), { lowercase: true });
  newTaskStep.cuid = cuid();
  newTaskStep.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ taskTaskStep: saved });
  });
}

/**
 * Get a single taskTaskStep
 * @param req
 * @param res
 * @returns void
 */
export function getTaskStep(req, res) {
  TaskStep.findOne({ cuid: req.params.cuid }).exec((err, taskTaskStep) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ taskTaskStep });
  });
}

/**
 * Delete a taskTaskStep
 * @param req
 * @param res
 * @returns void
 */
export function deleteTaskStep(req, res) {
  TaskStep.findOne({ cuid: req.params.cuid }).exec((err, taskTaskStep) => {
    if (err) {
      res.status(500).send(err);
    }

    taskTaskStep.remove(() => {
      res.status(200).end();
    });
  });
}
