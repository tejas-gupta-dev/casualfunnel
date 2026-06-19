import event from '../models/events.model.js';
export const bulkevents = async (req, res) => {
  try {
    console.log(req.body);

    const { events } = req.body || {};

    if (!events || !Array.isArray(events)) {
      return res.status(400).json({
        success: false,
        message: "Invalid events payload",
      });
    }

    await event.insertMany(events);

    return res.json({
      success: true,
    });

  } catch (error) {
    console.log("FULL ERROR:");
    console.log(error);

    console.log("MESSAGE:");
    console.log(error.message);

    console.log("ERRORS:");
    console.log(error.errors);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getsessions = async (req, res) => {
  try {
    const sessions = await event.aggregate([
      {
        $group: {
          _id: "$s",
          totalEvents: {
            $sum: 1,
          },
          lastActivity: {
            $max: "$t",
          },
        },
      },
      {
        $sort: {
          lastActivity: -1,
        },
      },
    ]);

    res.json({
      success: true,
      sessions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};

export const getsessionevents = async ( req,res ) => {
  try {
    const events = await event.find({
      s: req.params.sessionId,
    })
      .sort({ t: 1 })
      .lean();

    res.json({
      success: true,
      events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};


export const getheatmap = async ( req,res ) => {
  try {
    const data = await event.find({
        p: req.query.page,
        e: "click",
    },
    {
        x: 1,
        y: 1,
        _id: 0,
    }).lean();

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};