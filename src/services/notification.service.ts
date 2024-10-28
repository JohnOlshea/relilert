import { INotificationDocument } from '@app/interfaces/notification.interface';
import { NotificationModel } from '@app/models/notification.model';
import { Model } from 'sequelize';

/**
 * Creates a new notification group in the database.
 * @param notificationData - The data to create a notification group, adhering to INotificationDocument.
 * @returns A Promise resolving to the created notification group data.
 * @throws Error if creation fails.
 */
export async function createNotification(notificationData: INotificationDocument): Promise<INotificationDocument> {
  try {
    const createdNotification: Model = await NotificationModel.create(notificationData);
    return createdNotification.dataValues as INotificationDocument;
  } catch (error: any) {
    throw new Error(`Failed to create notification: ${error.message}`);
  }
}

/**
 * Retrieves a single notification group by its ID.
 * @param notificationId - The ID of the notification to retrieve.
 * @returns A Promise resolving to the found notification data or undefined if not found.
 * @throws Error if retrieval fails.
 */
export async function getNotificationById(notificationId: number): Promise<INotificationDocument | undefined> {
  try {
    const notification: INotificationDocument | undefined = await NotificationModel.findOne({
      raw: true,
      where: { id: notificationId },
      order: [['createdAt', 'DESC']],
    }) as unknown as INotificationDocument;
    return notification;
  } catch (error: any) {
    throw new Error(`Failed to retrieve notification by ID: ${error.message}`);
  }
}

/**
 * Retrieves all notification groups for a specific user by their user ID.
 * @param userId - The ID of the user whose notifications to retrieve.
 * @returns A Promise resolving to an array of notification data.
 * @throws Error if retrieval fails.
 */
export async function getNotificationsByUserId(userId: number): Promise<INotificationDocument[]> {
  try {
    const notifications: INotificationDocument[] = await NotificationModel.findAll({
      raw: true,
      where: { userId },
      order: [['createdAt', 'DESC']],
    }) as unknown as INotificationDocument[];
    return notifications;
  } catch (error: any) {
    throw new Error(`Failed to retrieve notifications for user: ${error.message}`);
  }
}

/**
 * Updates a notification group by its ID with new data.
 * @param notificationId - The ID of the notification to update.
 * @param updateData - The data to update in the notification.
 * @returns A Promise resolving to void.
 * @throws Error if update fails.
 */
export async function updateNotification(notificationId: number, updateData: Partial<INotificationDocument>): Promise<void> {
  try {
    await NotificationModel.update(updateData, {
      where: { id: notificationId },
    });
  } catch (error: any) {
    throw new Error(`Failed to update notification: ${error.message}`);
  }
}

/**
 * Deletes a notification group by its ID.
 * @param notificationId - The ID of the notification to delete.
 * @returns A Promise resolving to void.
 * @throws Error if deletion fails.
 */
export async function deleteNotification(notificationId: number): Promise<void> {
  try {
    await NotificationModel.destroy({
      where: { id: notificationId },
    });
  } catch (error: any) {
    throw new Error(`Failed to delete notification: ${error.message}`);
  }
}
