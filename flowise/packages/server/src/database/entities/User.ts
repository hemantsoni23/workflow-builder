/* eslint-disable */
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'
import { IUser } from '../../Interface'

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: true })
    username?: string

    @Column({ unique: true })
    email: string

    @Column({ nullable: true })
    password?: string

    @Column({ nullable: true })
    googleId?: string

    @Column({ nullable: true })
    profilePicture?: string

    @Column({ type: 'boolean', default: false })
    isGoogleUser: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
