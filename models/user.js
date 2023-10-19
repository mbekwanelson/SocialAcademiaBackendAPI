const
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    mongoose_delete = require('mongoose-delete'),
    ObjectId = Schema.ObjectId

const UserSchema = new Schema({
    name: String,
    surname: String,
    username: String,
    email: String,
    password: String,
    aboutMe: String,
    lastSeen: { type: Date, default: null },
    onlineStatus: { type: Boolean, default: false },
    createdChannels: [
      {
        _id: false,
        channelId: { type: ObjectId, ref: 'Channel', default: null }
      }
    ]
}, { timestamps: true })

UserSchema.plugin(mongoose_delete, { deletedBy: true, deletedAt: true, indexFields: true })

const User = mongoose.model('User', UserSchema)

module.exports = User