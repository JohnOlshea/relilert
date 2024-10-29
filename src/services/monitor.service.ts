import { IMonitorDocument } from '@app/interfaces/monitor.interface';
import { MonitorModel } from '@app/models/monitor.model';
import { Model, Op } from 'sequelize';
import dayjs from 'dayjs';
import { getSingleNotificationGroup } from '@app/services/notification.service';

/**
 * Create a new monitor
 * @param data
 * @returns {Promise<IMonitorDocument>}
 */
export const createMonitor = async (data: IMonitorDocument): Promise<IMonitorDocument> => {
  try {
    const result: Model = await MonitorModel.create(data);
    return result.dataValues;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get either all monitors (active or inactive) or just active for a user
 * @param userId
 * @param active
 * @returns
 */
export const getUserMonitors = async (userId: number, active?: boolean): Promise<IMonitorDocument[]> => {
  try {
    const monitors: IMonitorDocument[] = (await MonitorModel.findAll({
      raw: true,
      where: {
        [Op.and]: [
          {
            userId,
            ...(active && {
              active: true
            })
          }
        ]
      },
      order: [['createdAt', 'DESC']]
    })) as unknown as IMonitorDocument[];
    return monitors;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get all active monitors for a user
 * @param userId
 * @returns {Promise<IMonitorDocument[]>}
 */
export const getUserActiveMonitors = async (userId: number): Promise<IMonitorDocument[]> => {
  try {
    const updatedMonitors: IMonitorDocument[] = [];
    const monitors: IMonitorDocument[] = await getUserMonitors(userId, true);
    for (let monitor of monitors) {
      const group = await getSingleNotificationGroup(monitor.notificationId!);
      monitor = {
        ...monitor,
        notifications: group
      };
      updatedMonitors.push(monitor);
    }
    return updatedMonitors;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get active monitors for all users
 * @returns {Promise<IMonitorDocument[]>}
 */
export const getAllUsersActiveMonitors = async (): Promise<IMonitorDocument[]> => {
  try {
    const monitors: IMonitorDocument[] = (await MonitorModel.findAll({
      raw: true,
      where: { active: true },
      order: [['createdAt', 'DESC']]
    })) as unknown as IMonitorDocument[];
    return monitors;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Get monitor by id
 * @param monitorId
 * @returns {Promise<IMonitorDocument>}
 */
export const getMonitorById = async (monitorId: number): Promise<IMonitorDocument> => {
  try {
    const monitor: IMonitorDocument = (await MonitorModel.findOne({
      raw: true,
      where: { id: monitorId }
    })) as unknown as IMonitorDocument;
    let updatedMonitor: IMonitorDocument = { ...monitor };
    const notifications = await getSingleNotificationGroup(updatedMonitor.notificationId!);
    updatedMonitor = { ...updatedMonitor, notifications };
    return updatedMonitor;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Toggle active/inactive monitor
 * @param monitorId
 * @param userId
 * @param active
 * @returns {Promise<IMonitorDocument[]>}
 */
export const toggleMonitor = async (monitorId: number, userId: number, active: boolean): Promise<IMonitorDocument[]> => {
  try {
    await MonitorModel.update(
      { active },
      {
        where: {
          [Op.and]: [{ id: monitorId }, { userId }]
        }
      }
    );
    const result: IMonitorDocument[] = await getUserMonitors(userId);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Update single monitor
 * @param monitorId
 * @param userId
 * @param data
 * @returns {Promise<IMonitorDocument[]>}
 */
export const updateSingleMonitor = async (monitorId: number, userId: number, data: IMonitorDocument): Promise<IMonitorDocument[]> => {
  try {
    await MonitorModel.update(
      data,
      {
        where: { id: monitorId }
      }
    );
    const result: IMonitorDocument[] = await getUserMonitors(userId);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Update monitor status
 * @param monitor
 * @param timestamp
 * @param type
 * @returns {Promise<IMonitorDocument>}
 */
export const updateMonitorStatus = async (monitor: IMonitorDocument, timestamp: number, type: string): Promise<IMonitorDocument> => {
  try {
    const now = timestamp ? dayjs(timestamp).toDate() : dayjs().toDate();
    const { id, status } = monitor;
    const updatedMonitor: IMonitorDocument = {...monitor};
    updatedMonitor.status = type === 'success' ? 0 : 1;
    const isStatus = type === 'success' ? true : false;
    if (isStatus && status === 1) {
      updatedMonitor.lastChanged = now;
    } else if (!isStatus && status === 0) {
      updatedMonitor.lastChanged = now;
    }
    await MonitorModel.update(updatedMonitor, { where: {id }});
    return updatedMonitor;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Delete a single monitor with its associated heartbeats
 * @param monitorId
 * @param userId
 * @param type
 * @returns {Promise<IMonitorDocument[]>}
 */
export const deleteSingleMonitor = async (monitorId: number, userId: number, type: string): Promise<IMonitorDocument[]> => {
  try {
    await deleteMonitorTypeHeartbeats(monitorId, type);
    await MonitorModel.destroy({
      where: { id: monitorId }
    });
    const result: IMonitorDocument[] = await getUserMonitors(userId);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * Delete monitor with type heartbeats
 * @param type
 * @param monitorId
 * @returns {Promise<IHeartbeat[]>}
 */
export const deleteMonitorTypeHeartbeats = async (monitorId: number, type: string): Promise<void> => {
  console.log(monitorId, type)
};
